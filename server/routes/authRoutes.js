const express = require('express');
const { register, login, logout, getSession, checkUserById } = require('../controllers/authController');
const { authenticate } = require('../middlewares/authenticate');

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', authenticate, logout);
authRouter.get('/session', authenticate, getSession);
authRouter.get('/check-user/:userId', authenticate, checkUserById);

module.exports = authRouter;