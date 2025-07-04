const express=require('express')
const router=express.Router()
const user=require('../models/User')
const {reguser,getuser,getuserbyid, updateuser, deleteuser,loginn}=require('../controls/Usercontrol')
const {requireAuth, requireAdmin}=require('../middleware/authMiddleware')

router.post('/reg',reguser)
router.post('/loginn',loginn) 
router.get('/login',getuser) 

router.get('/:id', getuserbyid)
router.put('/:id', updateuser)
router.delete('/:id',deleteuser)

module.exports=router