import User from "../models/user.js";
import CryptoJS from "crypto-js";

export const register = async(req,res)=>{
    const  newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
       
    })
 try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
 } catch (error) {
    res.status(500).json(error)
 }

}