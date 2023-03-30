const mongoose=require("mongoose");
const AdminSchma=mongoose.Schema({
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

const Admimodel=mongoose.model("admin",AdminSchma);
module.exports={
    Admimodel
}