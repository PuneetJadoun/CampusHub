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



// update user info
export const updateUser = async (req, res) => {
  try {
    const { name } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // only allow editable fields
    if (name) user.name = name;

    await user.save();

    res.json({
      message: "Profile updated",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};