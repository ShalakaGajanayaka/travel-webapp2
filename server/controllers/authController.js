const User = require('../models/User');

const generateUniqueReferralNo = async () => {
    let referralNo;
    let existingReferralNo;
    do {
        referralNo = 'REF' + Math.random().toString(36).substr(2, 9).toUpperCase();
        existingReferralNo = await User.findOne({ referralNo });
    } while (existingReferralNo);
    return referralNo;
};

const register = async (req, res) => {
    try {
        const { userName, password, phone, pin, employeeNo, parentUser } = req.body;
        let { referralNo } = req.body;

        // Check if the referral number already exists
        if (await User.findOne({ referralNo })) {
            referralNo = await generateUniqueReferralNo();
        }

        const newUser = new User({ userName, password, phone, pin, employeeNo, referralNo, parentUser });

        const existingUserName = await User.findOne({ userName });
        if (existingUserName) {
            return res.status(400).json({ error: 'Username is already registered.' });
        }
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName, password });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        const encodedUserId = Buffer.from(String(user._id)).toString('base64');
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
        res.cookie('auth', encodedUserId, {
            httpOnly: true,
            sameSite: true, // Adjust SameSite for environments
            secure: 'production',
            maxAge: oneDayInMilliseconds, // 1 day
        });

        user.lastLoggedInIP = req.ip;
        user.lastLoggedInTime = new Date().toLocaleString();
        await user.save();

        res.status(200).json({ message: 'Logged in successfully', role: user.role });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const logout = (req, res) => {
    res.clearCookie('auth', {
        httpOnly: true,
        sameSite: 'None',
        secure:  'production'
    });
    res.status(200).json({ message: 'Logged out successfully' });
};

const getSession = async (req, res) => {
    try {
        const loggedInUser = req.user;

        const user = await User.findById(loggedInUser._id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        user.lastActive = new Date().toLocaleString();
        await user.save();

        res.status(200).json({ message: 'Session active', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find().populate('parentUser', 'userName');

        const populatedUsers = users.map(user => ({
            ...user._doc,  // Spread original user data
            parentUserName: user.parentUser ? user.parentUser.userName : null
        }));

        res.status(200).json(populatedUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const checkUserById = async (req, res) => {
    try {
        const { userId } = req.params; // Assuming the user ID is passed in the request parameters

        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            // If no user is found, return false
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // If user is found, return true
        return res.status(200).json({ success: true, message: 'User found' });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { register, login, logout, getSession, getAllUsers, checkUserById };