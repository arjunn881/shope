import User from '../models/User.js'

export const update = async(req,res)=>{
    if(req.body.pasword){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
};