const bcrypt = require('bcrypt');
const { createUser, getUsers } = require('../models/userModel');

async function registerUser(req, res) {
  const { username, password } = req.body;
  const isExistingUser = await getUsers(username);
  if (isExistingUser.length > 0) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser({ username, password: hashedPassword, firstname: req.body.firstname, lastname: req.body.lastname });
  res.status(201).json({ message: 'User created successfully' });
  res.redirect('/login');
}

module.exports = { registerUser };
