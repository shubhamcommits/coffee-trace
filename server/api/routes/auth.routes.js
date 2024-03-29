// Express Module
const express = require('express')

// Authorization
const { Authorization  } = require('../../utils')

// Router Module
const router = express.Router()

// Import Controllers
const { AuthControllers } = require('../controllers')

// Login Route
router.post('/login', AuthControllers.signIn)

// Sign-Up Route
router.post('/sign-up', AuthControllers.signUp)

// Refresh-Access-Token Route
router.post('/refresh-access-token', Authorization.verifyAccessToken, Authorization.isLoggedIn, AuthControllers.refreshAccessToken)

// Logout Route
router.post('/logout', Authorization.verifyAccessToken, Authorization.isLoggedIn, AuthControllers.signOut)

// Export Router
module.exports = router