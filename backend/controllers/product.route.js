const express=require("express");
let productroute=express.Router()
const {productmodel}=require("../Models/productmodel")
productroute.post("/add",async(req,res)=>{
    const data=await productmodel.insertMany(req.body);
    res.send({msg:"ok"})
});
productroute.get("/all",async(req,res)=>{
    let data=await productmodel.find();
    res.send(data)
})
productroute.get("/coat",async(req,res)=>{
const data=await productmodel.find({gender:"women",category: "coats"});
res.send(data)
})
productroute.get("/bag",async(req,res)=>{
    const data=await productmodel.find({gender:"women",category: "bag"});
    res.send(data)
    })
    productroute.get("/shoe",async(req,res)=>{
        const data=await productmodel.find({gender:"women",category: "shoes"});
        res.send(data)
        })

module.exports={
    productroute
}