const express=require('express')
const router=express.Router()
// const {home,register} =require('./auth.controllers')
const authController=require('./auth.controllers')


//route
// router.get("/",home)
// router.get("/register",register)
router.get("/",authController.home)
router.post("/register",authController.register)




module.exports=router;