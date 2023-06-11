import User from "../models/user.js";
import CryptoJS from "crypto-js";
import Jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_sec
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong credentials!!!");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_sec
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!!!");
    const { password, ...others } = user._doc;

    const acessToken = Jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "1d" }
    );

    others && res.status(200).json({...others, acessToken});
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
