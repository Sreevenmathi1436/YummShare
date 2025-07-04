const RecepieScheme=require("../models/Recepie")
const mongoose = require('mongoose')
const create_recepie=async(req,res)=>{
    const{title,image,ingredients,instruction,cookingTime,createdBy,createdAt}=req.body

    try{
        const rcp=await RecepieScheme.create({title,image,ingredients,instruction,cookingTime,createdBy,createdAt})
        res.status(200).json(rcp)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
//to get all recepie details
const get_recepie=async(req,res)=>{
    const rcp=await RecepieScheme.find({}).sort({createdAt:-1})
    res.status(200).json(rcp)
}

//get recepies by id
const get_recepie_by_id = async (req, res) => {
  try {
    const id = req.params.id; 
    const rcp = await RecepieScheme.findById(id).populate('createdBy', 'username email'); 
    
    if (!rcp) return res.status(404).json({ error: "Recipe not found" });
    res.status(200).json(rcp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE a recipe
const update_recepie = async (req, res) => {
  const { id } = req.params;
  try {
    const rcp = await RecepieScheme.findByIdAndUpdate(id, req.body, { new: true });
    if (!rcp) return res.status(404).json({ error: "Recipe not found" });
    res.status(200).json(rcp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a recipe
const delete_recepie = async (req, res) => {
  const { id } = req.params;
  try {
    const rcp = await RecepieScheme.findByIdAndDelete(id);
    if (!rcp) return res.status(404).json({ error: "Recipe not found" });
    res.status(200).json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Search recipes by title
const search_recepie = async (req, res) => {
  const { title } = req.query;

  try {
    const srecipes = await RecepieScheme.find({
      title: { $regex: title, $options: 'i' }
    });

    if (!srecipes || srecipes.length === 0) {
      return res.status(404).json({ message: "No recipes found" });
    }

    res.status(200).json(srecipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get recepies by specific user
const get_my_recepie = async (req, res) => {
  const { userId } = req.params;

  try {
    const userRecipes = await RecepieScheme.find({ createdBy: userId }).sort({ createdAt: -1 });
    res.status(200).json(userRecipes); // Always return 200 and an array, even if empty
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports={create_recepie,get_recepie,get_recepie_by_id,update_recepie,delete_recepie,search_recepie,get_my_recepie}