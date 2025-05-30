// server/routes/taskRoutes.js
const express = require('express');
const { updateReferralNumber, getUser, updateUser, deleteUser, createWallet, getUserWallet, createWithdrawal, getWithdrawalsByUser, updateWallet } = require('../controllers/userController');
const { authenticate } = require('../middlewares/authenticate');
const userRouter = express.Router();

userRouter.post('/create-wallet', authenticate, createWallet);
userRouter.get('/get-wallet', authenticate, getUserWallet);
userRouter.get('/get-wallet/:userId', getUserWallet);
userRouter.put('/update-wallet/:userId', updateWallet);
userRouter.post('/update-ref', authenticate, updateReferralNumber);
userRouter.get('/:userId', getUser);
userRouter.put('/:userId', updateUser);
userRouter.delete('/:userId', deleteUser);
userRouter.post('/withdraw/:userId', createWithdrawal);
userRouter.get('/withdrawals/:userId', authenticate, getWithdrawalsByUser);

module.exports = userRouter;