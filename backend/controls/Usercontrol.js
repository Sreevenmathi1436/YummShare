const usermodel=require("../models/User")
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//create user 
const reguser=async(req,res)=>{
    const{username,email,password,role}=req.body
    const hashedPassword = await bcrypt.hash(password,10);
    try{
        const usr=await usermodel.create({username,email,password:hashedPassword,role})
        res.status(200).json(usr)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

const loginn=async (req,res)=>{
    const {username,password}=req.body
    const user = await usermodel.findOne({ username });
    if (!user) {
        return res.status(400).json({ error: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }
    try {
        const token=jwt.sign({id:user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn:'1h'});
        res.status(200).json({token,user:{id :user._id,username:user.username,role:user.role}});
    } catch (err) {
      console.error('JWT sign error', err);
        res.status(500).json({ error: 'Token generation failed' });
}
}


//to get all users details
const getuser=async(req,res)=>{
    const usr=await usermodel.find({}).sort({createdAt:-1})
    res.status(200).json(usr)
}
//getting by id
// GET a single user by ID
const getuserbyid = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }
  try {
    const user = await usermodel.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//UPDATE user
const updateuser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await usermodel.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE user
const deleteuser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await usermodel.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports={reguser,getuser,getuserbyid,updateuser,deleteuser,loginn}