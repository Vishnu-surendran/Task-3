const multer=require("multer")
const imageModel=require("../models/imageModel")
const path=require("path")


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./images")
    },
    filename:(req,file,cb)=>{
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload=multer({storage:storage})

const uploader=async(req,res)=>{

    const id=req.user

    try{
const Upload=await imageModel.create({userId:id,imagePath:req.file.filename})
res.status(200).json(Upload)
    }catch(error){
res.status(400).json(error.message)
    }

}



module.exports={upload,uploader}