const express=require("express")

const router=express.Router()
const authorization=require("../middlewares/authMiddleware")
const {upload,uploader}=require("../controllers/uploadControllers")
router.use(authorization)

router.post("/",upload.single("image"),uploader)


module.exports=router