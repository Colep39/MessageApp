const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/userController');
const passport = require('passport');


const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);

vrouter.post('/register', registerUser);

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

module.exports = router;
