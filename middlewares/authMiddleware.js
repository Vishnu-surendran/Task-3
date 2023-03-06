const jwt=require("jsonwebtoken")
const userModel=require("../models/userModel")

const authorization=async(req,res,next)=>{
    const {authorization}=req.headers
    console.log(req.headers);
    if(!authorization){
        return res.status(401).json({message:"Unauthorized access"})
    }else{
        const token = authorization.split(" ")[1];
        try{
const {id}=await jwt.verify(token,"thisismyserver")
const userExist=await userModel.findById({_id:id})
req.user=userExist._id
next()
        }catch(error){
res.status(401).json(error)
        }
    }

}

module.exports=authorization