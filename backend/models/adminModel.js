import mongoose from "mongoose";
const adminSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profile:{type:String,default:"https://res.cloudinary.com/dotdud17h/image/upload/v1723287435/admin_xq3fux.jpg"},
    phoneNo:{type:Number,default:null},
    products:[{type:mongoose.Schema.Types.ObjectId,ref:'product'}]
},{minimize:false})


const adminModel=mongoose.models.admin||mongoose.model('admin',adminSchema);
export default adminModel;
