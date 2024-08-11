import express from "express";
import mongoose from "mongoose";
import router from "./scr/router/index.js";

const app =  express();
const PORT = 8000;
app.use(express.json())

app.use("/api",router)


mongoose.connect(``).then(()=>{
    console.log(`server is connected to database`);
  
}).catch((error)=>{
console.log(`Failed to connect to database`);
})

app.listen(PORT,()=>{
    console.log(`server is running on port: http://locahost${PORT}`);
    })

export default app 