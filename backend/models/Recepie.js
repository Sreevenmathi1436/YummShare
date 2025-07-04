const mongoose=require('mongoose')

const RecepieScheme= new mongoose.Schema({
    title:{type :String,
            required:true
    },
    image: { type: String, // URL to image
    required: false, 
    },
    ingredients:{type :[String],
            required:true
    },
    instruction:{type :String,
            required:true
    },
    cookingTime: {
    type: Number, 
    required: false,
    },
    createdBy:{type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    createdAt: { type: Date,
    default: Date.now,
  }

})

module.exports=mongoose.model('recepie',RecepieScheme)