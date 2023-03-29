const mongoose=require("mongoose");
const productschma=mongoose.Schema({
   name:String,
   price:Number,
   category:String,
   gender:String,
   rating:Number,
   image:Array,
   tag:String

},
{
    versionKey:false, strict:false
})

const productmodel=mongoose.model("product",productschma);
module.exports={
    productmodel
}