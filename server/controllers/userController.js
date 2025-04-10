const User = require('../models/User');
const Wallet = require('../models/Wallet');
const Withdrawal = require('../models/Withdrawal');

// get a user
const getUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await
      User
        .findById
        (userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user details
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updates = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    // Update the user's totalEarnings if it exists in the updates object
    if (updates.totalEarnings !== undefined) {
      user.totalEarnings = updates.totalEarnings;
    }

    // Update the user's details
    Object.keys(updates).forEach((key) => {
      user[key] = updates[key];
    });

    await user.save();
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    // console.log("done");
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    await user.deleteOne();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateReferralNumber = async (req, res) => {
  try {
    const userId = req.user._id;
    const { referralNumber } = req.body;

    const currentUser = await User.findById(userId);

    currentUser.referralNumber = referralNumber;
    await currentUser.save();

    res.status(200).json({
      message: 'Referral number updated successfully',
      referredUserName: populatedReferredUser.name,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createWallet = async (req, res) => {
  try {
    const { firstName, phone, walletAddress, network, cryptoType } = req.body;
    const userId = req.user._id; // Assuming `req.user` contains authenticated user info

    const newWallet = new Wallet({
      userId,
      firstName,
      phone,
      walletAddress,
      network,
      cryptoType,
    });

    await newWallet.save();
    res.status(201).json({ message: "Wallet added successfully", wallet: newWallet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserWallet = async (req, res) => {
  try {
    let userId;
    
    // Check if userId is provided in params (admin route)
    if (req.params.userId) {
      userId = req.params.userId;
    } else {
      // Use the authenticated user's ID (user route)
      userId = req.user._id;
    }

    // Fetch the user's wallet
    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    res.status(200).json(wallet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a withdrawal
const createWithdrawal = async (req, res) => {
  const { userId } = req.params;
  const { amount } = req.body;

  try {
    // Create a new withdrawal
    const newWithdrawal = new Withdrawal({
      userId,
      amount,
    });

    // Save the withdrawal to the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Check if the withdrawal amount is greater than the user's totalEarnings
    if (amount > user.totalEarnings) {
      return res.status(400).json({
        message: "Withdrawal amount exceeds total earnings",
        withdrawal: 0,
      });
    }

    user.totalEarnings -= amount;
    await user.save();
    await newWithdrawal.save();

    res.status(201).json({
      message: "Withdrawal created successfully",
      withdrawal: newWithdrawal,
    });


  } catch (error) {
    res.status(500).json({
      message: "Error creating withdrawal",
      error: error.message,
    });
  }
};

// Fetch all withdrawals by userId
const getWithdrawalsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find withdrawals for the specific user
    const withdrawals = await Withdrawal.find({ userId }).populate("userId", "name email"); // You can populate more fields from the User model if necessary
    if (withdrawals.length === 0) {
      return res.status(200).json({
        message: "No withdrawals found for this user",
        withdrawals: [],
      });
    }

    res.status(200).json({
      message: "Withdrawals fetched successfully",
      withdrawals,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching withdrawals",
      error: error.message,
    });
  }
};

const updateWallet = async (req, res) => {
  try {
    const { userId } = req.params;
    const { firstName, phone, walletAddress, network, cryptoType } = req.body;

    // Find the wallet by userId
    const wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    // Update wallet fields
    wallet.firstName = firstName || wallet.firstName;
    wallet.phone = phone || wallet.phone;
    wallet.walletAddress = walletAddress || wallet.walletAddress;
    wallet.network = network || wallet.network;
    wallet.cryptoType = cryptoType || wallet.cryptoType;

    // Save the updated wallet
    await wallet.save();

    res.status(200).json({ message: "Wallet updated successfully", wallet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserWallet,
  createWithdrawal,
  getWithdrawalsByUser,
  createWallet,
  getUser,
  updateUser,
  deleteUser,
  updateReferralNumber,
  updateWallet
};