const User=require("./user-model");



const home=async(req ,res)=>{
    try {
        res.status(200).send('welcome home')
    } catch (error) {
        
    }
}

//register logic
/**
 * 1.get registartion data: retrieve usename,email password
 * 2.check email existence
 * 3.hash password: secure
 * 4.create user: create a new user using hashed password
 * 5.save to db: save user to database
 * 6.respond: respond with 'registartion successful
 */

//register
const register=async(req,res)=>{
    try {

        const {username,email,phone,password}=req.body;

        //check email existence
        const userExist= await User.findOne({email});
        console.log("body data",req.body);

        if(userExist){
            return res.status(400).json({message:"email already exists"})
        }

        //hash passwrd
        const hashPassword= await bcrypt.hash(password,10)
        
        //if not exist then create a user
       const newUser= await User.create({username,email,password:hashPassword,phone})
        res.status(201).json({ message: "User created successfully", user: newUser });


    } catch (error) {
       res.status(500).json('internal server error')
        
    }
}
module.exports={home,register}
