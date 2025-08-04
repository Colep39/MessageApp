const getUsers = (req, res) => {
  res.json([{ id: 1, name: 'Cole' }]);
};

const createUser = (req, res) => {
  const user = req.body;
  res.status(201).json({ message: 'User created', user });
};

module.exports = {
  getUsers,
  createUser,
};
