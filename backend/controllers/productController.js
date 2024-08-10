import productModel from "../models/productModel.js";
import adminModel from "../models/adminModel.js";
import jwt from "jsonwebtoken";
// add product item
const addProduct = async (req, res) => {
  const imagePath=req.files.map((file)=>file.filename)
  const {name,category,description,state,price,stock,tags}=req.body;
  const { admintoken } = req.headers;
 
  
  if (!admintoken) {
    return res.json({ success: false, message: "Unauthorized user" });
  }

  try {
    const decoded_token = jwt.verify(admintoken, process.env.JWT_SECRETE_KEY);
    const adminId = decoded_token.id;
    const adminExist = await adminModel.findById(adminId);
    if (!adminExist) {
      return res.json({ success: false, message: "Admin doesn't exist" });
    }
    const productData=new productModel({
      name:name,
      category:category,
      description:description,
      state:state,
      price:JSON.parse(price),
      images:imagePath,
      stock:JSON.parse(stock),
      tags:tags.split(',')
    })
    const addedItem=await productData.save();
    console.log(addedItem)
   
 const newAdmin=   await adminModel.findByIdAndUpdate(adminId, {
      $push: { products: addedItem._id },
    });
    res.json({ success: true, message: "Product added succesfully" });
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error occured while adding product" });
  }
};

// get all products
const getproducts = async (req, res) => {
  console.log(req.body);
  res.json({ message: "hello" });
};
export { addProduct, getproducts };
