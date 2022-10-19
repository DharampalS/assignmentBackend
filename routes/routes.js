const express = require('express');
const users = require('../controllers/users/userController');
const router = express.Router();

router.route('/userLogin').post(users.signIn)
router.route('/userSignUp').post(users.signUp)

module.exports = router