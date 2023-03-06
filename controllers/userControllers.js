
const userModel=require("../models/userModel")

const jwt=require("jsonwebtoken")


/* Jwt Token creation */

const createToken=(id)=>{
return jwt.sign({id},"thisismyserver",{expiresIn:"2h"})
}


/* User Registration */

const userRegister=async(req,res)=>{

    const{email,password}=req.body

    try{
const user=await userModel.signup(email,password)
res.status(200).json(user)
    }catch(error){
res.status(400).json(error.message)
    }

}


/* User Login */

const userLogin=async(req,res)=>{
const {email,password}=req.body

try{
const user=await userModel.login(email,password)
const token=await createToken(user._id)
res.status(200).json(token)
}catch(error){
res.status(400).json(error.message)
}
}

module.exports={
    userRegister,userLogin
}