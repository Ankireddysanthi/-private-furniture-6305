const mongoose=require("mongoose");
const Userschma=mongoose.Schema({
    // username:{
    //     type:String
    // },
    // email:{
    //     type:String,
    //     requ
    // },
    // phone_number:{
    //     type:String,
    //     require:true,
    //     unique:true
    // },
    // pass:{
    //     type:String,
    //     require:true,
    //     unique:true
    // }
    username:String,
    email:String,
    pass:String,
    mobilenumber:Number
},{
    versionkey:false
})

const Usermodel=mongoose.model("user",Userschma);
module.exports={
    Usermodel
}