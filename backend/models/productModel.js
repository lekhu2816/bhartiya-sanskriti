import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    description:{type:String},
    state:{type:String,required:true},
    price:{
        amount:{type:Number,required:true},
        discount:{type:Number,require:true}
    },
    images:[{type:String}],
    stock: {
        availability: {type:String},
        quantity: {type:Number}
      },
      reviews: [{type:String,default:""}],
      ratings: {
        average_rating: {type:Number,default:5},
        total_ratings: {type:Number,default:5}
      },
      tags: [{type:String}], 
      adminId:{type:String} 
})

const productModel=mongoose.models.product||mongoose.model('product',productSchema);
export default productModel;