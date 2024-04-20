const User = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    const newUser = new User({ email, password, fullName });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await User.findOne({ email: email });
      if (user && user.password === password) {
          res.json({ success: true, message: "Usuario autenticado" });
      } else {
          res.status(401).json({ success: false, message: "Credenciales incorrectas" });
      }
  } catch (error) {
      res.status(500).json({ success: false, message: "Error del servidor" });
  }
};