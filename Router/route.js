const express = require('express');
const userController = require('../Controllers/userController');
const jwtMiddleware = require('../Middlewares/jwtMiddleware');
const multerConfig = require('../Middlewares/multerMiddlware');
const router = new express.Router();

// Middleware for logging requests
router.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// Register API route - localhost:4002/register
router.post('/register', async (req, res, next) => {
    try {
        await userController.register(req, res);
    } catch (error) {
        console.error('Error in /register:', error);
        next(error);
    }
});

// Login API route - localhost:4002/login
router.post('/login', async (req, res, next) => {
    try {
        await userController.login(req, res);
    } catch (error) {
        console.error('Error in /login:', error);
        next(error);
    }
});

// Edit User API route - localhost:4002/edit-user/:id
router.put('/edit-user/:id', jwtMiddleware, multerConfig.single('userImage'), async (req, res, next) => {
    try {
        await userController.editUser(req, res);
    } catch (error) {
        console.error('Error in /edit-user:', error);
        next(error);
    }
});

// Get User API route - localhost:4002/get-user/:id
router.get('/get-user/:id', jwtMiddleware, async (req, res, next) => {
    try {
        await userController.getUser(req, res);
    } catch (error) {
        console.error('Error in /get-user:', error);
        next(error);
    }
});

// Confirm Mail API route - localhost:4002/confirm-mail
router.post('/confirm-mail', async (req, res, next) => {
    try {
        await userController.resetPassword(req, res);
    } catch (error) {
        console.error('Error in /confirm-mail:', error);
        next(error);
    }
});

// Reset Password API route - localhost:4002/reset-password
router.post('/reset-password', async (req, res, next) => {
    try {
        await userController.resetPasswordConfirm(req, res);
    } catch (error) {
        console.error('Error in /reset-password:', error);
        next(error);
    }
});

// Error handling middleware
router.use((err, req, res, next) => {
    console.error('Unhandled error:', err.stack);
    res.status(500).send('Something broke!');
});

module.exports = router;
