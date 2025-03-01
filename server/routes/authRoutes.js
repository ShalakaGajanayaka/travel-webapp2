const express = require('express');
const { register, login, adminLogin, logout, getSession, checkUserById, adminRegister } = require('../controllers/authController');
const { authenticate } = require('../middlewares/authenticate');

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/admin-login', adminLogin);
authRouter.post('/admin-register', adminRegister);
authRouter.post('/logout', authenticate, logout);
authRouter.get('/session', authenticate, getSession);
authRouter.get('/check-user/:userId', authenticate, checkUserById);

module.exports = authRouter;