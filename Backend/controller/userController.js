const User = require("../model/userModel");

// login user
const loginUser = async (req, res) => {
  res.json({ message: "Login user" });
};
//signup user
const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, userId: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};
