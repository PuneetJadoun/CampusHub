import User from '../models/user.model.js';



// user kii personal info 
export const getMe = async (req, res)=>{
    try{
        const user = await User.findById(req.user.id).select("-password");

        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        res.json(user);
    }
    catch(e){
        res.status(500).json({message: "Server error"}) 
    }
}