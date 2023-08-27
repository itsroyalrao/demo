const bcrypt = require('bcrypt');
const Signup = require('../models/signup');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Signup.findOne({ email: email });
    if (!user) return res.status(404).json({ success: false, msg: "Email is incorrect!" });

    const passwordMatch = bcrypt.compare(password, user.password, (err, same) => {
      if (same) return res.status(200).json({ success: true, msg: 'User login sucessful!' });
      else return res.status(401).json({ success: false, msg: 'Password do not match!' });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { login };