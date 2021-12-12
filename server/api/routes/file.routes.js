// Express Module
const express = require('express')

// Authorization
const { Authorization } = require('../../utils')

// File Controllers
const { FileControllers } = require('../controllers')

// Router Module
const router = express.Router()

// Verify Access Token
router.use(Authorization.verifyAccessToken)

// Verify If the current user isLoggedIn 
router.use(Authorization.isLoggedIn)

// Route Definition
router.route('/')

        // Upload file
        .post(FileControllers.uploadFile)

router.route('/signed-url')

        // To Upload
        .post(FileControllers.getSignedUploadUrl)

// Export Router
module.exports = router