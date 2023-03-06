const express=require("express")

const app=express()

const userRoutes=require("./routes/userRoutes")
const uploadRoutes=require("./routes/imageRoutes")

const mongoose=require('mongoose')

app.use(express.json())

app.use("/api/user",userRoutes)

app.use("/api/user/uploads",uploadRoutes)

mongoose.connect("mongodb+srv://vishnu:vichu@cluster0.b2nedfu.mongodb.net/task3?retryWrites=true&w=majority")
.then((response)=>{
console.log('connected on mongoose');
app.listen(3000,()=>{
    console.log('listening on port');
})
}).catch((err)=>{
  console.log(err);
})


