const express=require('express')
const router=express.Router()
const recepie=require('../models/Recepie')
const {create_recepie,get_recepie,get_recepie_by_id,update_recepie,delete_recepie,search_recepie,get_my_recepie}=require('../controls/Recepie_controls')

// router.get('/',(req,res)=>{
//     res.send("varuu malu varuu")
// })

router.post('/',create_recepie)
router.get('/get',get_recepie)

router.get("/search", search_recepie);
router.get('/myrecepie/:userId',get_my_recepie)

router.get('/:id',get_recepie_by_id)
router.put("/:id", update_recepie);
router.delete("/:id", delete_recepie);

 
module.exports=router