import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
profile:{type:String,default:"https://res.cloudinary.com/dotdud17h/image/upload/v1723152870/userLogo_wlnaom.jpg"},
phoneNo:{type:Number,default:null},
cartData:{type:Object,default:{}},

},{minimize:false})

const userModel=mongoose.models.user||mongoose.model("user",userSchema);
export default userModel;

