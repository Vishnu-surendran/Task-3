const mongoose=require("mongoose")

const Schema=mongoose.Schema

const imageSchema=new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    imagePath:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Upload",imageSchema)