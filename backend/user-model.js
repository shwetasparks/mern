const mongoose=require('mongoose');
const jwt=require('jsonwebtoken')


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

//jsonwebtoken *************
userSchema.methods.generateToken= async function(){
    try {
        return jwt.sign({
            userId:this._toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        }, process.env.JWT_SECRET,{expiresIn:"30d"})
        
    } catch (error) {
        console.log(error)
    }

}

const User=new mongoose.model('User',userSchema)
module.exports=User;


//jsonwebtoken: authentication and authorizartion
//header,payload ,signature
//server assigned in cookies