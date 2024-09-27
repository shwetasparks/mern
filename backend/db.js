const mongoose=require('mongoose')
const URI= "mongodb+srv://shwetakoffficiall:Hi0rIau6KTE5Oy0q@cluster0.bxjlf.mongodb.net/"



//connect to mongo db
const connectDB=async()=>{
    try {
        await mongoose.connect(URI);
        console.log('connection success db')
        
    } catch (error) {
        console.log('failed connection request',error)
        
    }
}

module.exports=connectDB;