const express=require("express");
const { connected } = require("./config/db");
const { productroute } = require("./controllers/product.route");
const { userroute } = require("./controllers/user router");
const cors=require("cors");
const { adminroute } = require("./controllers/adminroute");
const app=express();
app.use(cors())
app.use(express.json())
require("dotenv").config()
app.get("/",(req,res)=>{
res.send({mas:"welcome"})
})
app.use("/user",userroute)
app.use("/products",productroute)
app.use("/admin",adminroute)
app.listen(process.env.port,async()=>{   
try {
    await connected
    console.log('connected to mongodb') 
} catch (error) {
    
}
})