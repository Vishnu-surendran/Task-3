const express=require("express")
const {userLogin,userRegister}=require("../controllers/userControllers")
const router=express.Router()




router.post("/signup",userRegister)

router.post("/login",userLogin)


module.exports=router