import React, { useState } from "react";
import "./adminProducts.css";
import AdminProduct from "../../component/adminProduct/adminProduct";
const AdminProducts = () => {

  const [productData,setProductData]=useState([1,2,3,4,5,6])
  
  return (
    <div className="admin-products">
      {productData.map((product,index)=>(
        <AdminProduct key={index}></AdminProduct>
      ))}
    </div>
  );
};



export default AdminProducts;



