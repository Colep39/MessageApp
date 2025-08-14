const bcrypt = require('bcrypt');
const { createUser, findUserByUsername, findUserById } = require('../models/userModel');

async function registerUser(req, res) {
  const { username, password, firstname, lastname } = req.body;
  try {
    const isExistingUser = await findUserByUsername(username);
    if (isExistingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser({ username, password: hashedPassword, firstname, lastname });
    res.status(201).json({ message: 'User created successfully' });
  }
  catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

function loginUser(req, res){
  res.json({ message: 'Login successful', user: req.user});
}

function logoutUser(req, res){
  req.logout(err => {
    if (err) return res.status(500).json({ message: 'Logout failed' });
    res.json({ message: 'Logged out successfully' });
  });
}

async function getUserProfile(req, res) {
  try{
    const user = await findUserById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  }
  catch(error){
    console.error(error);
    res.status(500).json({ message: 'Error fetching user profile' });
  }
}

module.exports = { registerUser, loginUser, logoutUser, getUserProfile };
