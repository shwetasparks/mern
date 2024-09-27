const home=async(req ,res)=>{
    try {
        res.status(200).send('welcome home')
    } catch (error) {
        
    }
}


const register=async(req,res)=>{
    try {
        console.log("body data",req.body);
        res.status(200).json({message:req.body})
    } catch (error) {
        console.log(error)
        
    }
}
module.exports={home,register}
