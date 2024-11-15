const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require("../models/user.model");



const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && await user.matchPassword(password)) {
      console.log("Login successful!");
      // Générez et renvoyez un token JWT ou un autre type de réponse
      res.status(200).json({ message: "Login successful!" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Login error:", error: error.message });
  }
};

const signup = async (req, res) => {
  try {
    console.log('Request Body:', req.body);

    const { username, email, password, numero, role } = req.body;

    // Vérifiez si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Créez un nouvel utilisateur
    const user = new User({ username, email, password, numero, role });
    await user.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error('Error:', error); // Log the entire error
    res.status(500).json({ message: "Signup error", error: error.message });
  }
};


module.exports = {
  signin,
  signup, // Exportez également signup
};