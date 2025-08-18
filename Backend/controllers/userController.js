const bcrypt = require('bcrypt');
const { createUser, findUserByUsername, findUserById, updateUserPassword, updateUserProfile } = require('../models/userModel');

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

async function changePassword(req, res) {
  const { currentPassword, newPassword } = req.body;
  try {
    const user = await findUserById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    // check if user enteredd correct current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Current password is incorrect' });
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // update user password
    await updateUserPassword(user.id, hashedNewPassword);
    res.json({ message: 'Password changed successfully' });
    }
    catch(error){
      console.error(error);
      res.status(500).json({ message: 'Error changing password' });
    }
}

async function editProfile(req, res) {
  const { firstname, lastname, username } = req.body;
  try {
    const user = await findUserById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check if username is already taken by someone else
    if (username) {
      const existingUser = await findUserByUsername(username);
      if (existingUser && existingUser.id !== user.id) {
        return res.status(400).json({ message: 'Username already exists' });
      }
    }

    // Update with provided values
    const updatedUser = await updateUserProfile(user.id, {
      firstname: firstname || user.firstname,
      lastname: lastname || user.lastname,
      username: username || user.username
    });

    res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating profile' });
  }
}

module.exports = { registerUser, loginUser, logoutUser, getUserProfile, changePassword, editProfile };
