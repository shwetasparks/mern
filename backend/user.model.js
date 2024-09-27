const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    username:{String,
    require:true,
},
email:{
    type:String,
    require:true,
},
password:{
    type:String,
    require:true,
},
phone:{
    type:Number,
    require:true,
},
isAdmin:{
    type:Boolean,
    default:false
}

}
)

const User=new mongoose.model('User',userSchema)
module.exports=User;