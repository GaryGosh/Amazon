const express = require('express');
const router = express.Router();

router.post('/signup', (__, res) => res.json({welcome: 'welcome'}));

router.post('/account-activation', (_, res) => 
    res.json({ welcome: 'Account actvation' })
);

router.post('/signin', (__, res) => res.json({welcome: 'Sign in'}));

router.post('/forgot-password', (__, res) => res.json({welcome: 'Forgot password'}));

router.post('/reset-password', (__, res) => res.json({welcome: 'Reset password'}));

module.exports = router; 