require('dotenv').config()

const express= require('express')
const app = express()
const mongoose=require('mongoose')
const authRouter=require('./routes/Admin_routes')
const user_routes=require('./routes/router')
const recepie_rout=require('./routes/Recepie_routes')
const cors = require("cors");


const env=process.env
app.use(cors());
app.use(express.json())

app.use('/',user_routes)
app.use('/recepie',recepie_rout)
app.use('/auth',authRouter)



mongoose.connect('mongodb://localhost:27017/YummyShare')
.then(()=>{
    console.log('connected sucessfully to mongodb');
    
})
.catch((err)=>{
    console.log(err);
    
})

// app.get('/', (req, res) => {
//   res.send('YumShare API is running!');
// });

app.listen(env.port,()=>{
    console.log(`server started at port ${env.port}`);
    
})