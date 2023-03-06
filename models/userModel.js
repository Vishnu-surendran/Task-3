const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const Schema=mongoose.Schema

const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


/* User Signup */

userSchema.statics.signup=async function(email,password){
    const exist=await this.findOne({email})
if(exist){
    throw Error('Email already in use')
}else{
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)
    const user=this.create({email:email,password:hash})
    return user
}

   
 
}

/* User Login */

userSchema.statics.login=async function(email,password){
    
        const userExist=await this.findOne({email:email})
        if(!userExist){
            throw new Error("User does not exist")
        }else{
            const passwordCheck=await bcrypt.compare(password,userExist.password)
            if(!passwordCheck){
                throw new Error("Password incorrect")
            }else{
                return userExist
            }  
}
}


module.exports=mongoose.model("User",userSchema)