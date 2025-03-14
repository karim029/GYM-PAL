const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};
// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    // create jwt token
    const token = createToken(user._id);
    res.status(200).json({ email, userId: user._id, token: token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//signup user
const signUpUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    // create jwt token
    const token = createToken(user._id);
    res.status(200).json({ email, userId: user._id, token: token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};
