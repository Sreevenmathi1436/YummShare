const mongoose=require('mongoose')

const userScheme= new mongoose.Schema({
    username:{type :String,
                unique:true,
            required:true
    },
    email:{type :String,
            required:true,
            unique:true
    },
    password:{type :String,
            required:true
    },
    role:{type:String,
        enum:['user','admin'],
        default:'user'
    },
    createdAt: { type: Date, default: Date.now }
})

module.exports=mongoose.model('user',userScheme)