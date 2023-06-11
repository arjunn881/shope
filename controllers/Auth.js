import User from "../models/user.js";
import CryptoJS from "crypto-js";

export const register = async(req,res)=>{
    const  newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
       
    })
 try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
 } catch (error) {
    res.status(500).json(error)
 }

}

export const login = async(req,res)=>{

try {


   const user = await User.findOne({email:req.body.email});
   !user && res.status(401).json("Wrong credentials!!!");
   user && res.status(200).json(user);
   res.status(200).json(savedUser);
} catch (error) {
   res.status(500).json(error)
}

}


