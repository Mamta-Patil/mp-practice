const express = require('express');
const router = express.Router();
const { signup, signin, assignRole, createUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/signup', signup);
router.post('/signin', signin);
router.put('/assign-role', auth, assignRole); // Add auth middleware here
router.post('/create-user', auth, createUser);

module.exports = router;