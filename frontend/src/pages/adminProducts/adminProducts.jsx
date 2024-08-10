import React, { useContext, useState } from "react";
import "./adminProducts.css";
import AdminProduct from "../../component/adminProduct/adminProduct";
import { StoreContext } from "../../storeContext/storeContext";
const AdminProducts = () => {
   const{adminProduct}=useContext(StoreContext)
  
  return (
    <div className="admin-products">
      {adminProduct.map((product,index)=>(
        <AdminProduct product={product} key={index}></AdminProduct>
      ))}
    </div>
  );
};



export default AdminProducts;



