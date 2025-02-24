// server/routes/pointsTransactionRoutes.js
const express = require('express');
const transactionRouter = express.Router();
const { viewTransactionById, viewTransactionsByUser} = require('../controllers/pointsTransactionController');

// View all transactions for a user
transactionRouter.get('/user/:userId', viewTransactionsByUser);

// View a specific transaction by ID
transactionRouter.get('/:transactionId', viewTransactionById);

module.exports = transactionRouter;
