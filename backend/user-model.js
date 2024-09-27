const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    username:{ type:String,
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

//jsonwebtoken 
userSchema.methods.generateToken= function(){

}

const User=new mongoose.model('User',userSchema)
module.exports=User;


//jsonwebtoken: authentication and authorizartion
//header,payload ,signature
//server assigned in cookies