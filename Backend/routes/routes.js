const express = require('express');
const { registerUser, loginUser, logoutUser, getUserProfile } = require('../controllers/userController');
const { isAuthenticated } = require('../middleware/isAuthenticated')
const passport = require('passport');


const router = express.Router();


router.post('/register', registerUser);

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ message: info.message });

    req.logIn(user, err => {
      if (err) return next(err);
      return loginUser(req, res);
    });
  })(req, res, next);
});

router.get('/logout', logoutUser);

router.get('/me', isAuthenticated, getUserProfile);

module.exports = router;
