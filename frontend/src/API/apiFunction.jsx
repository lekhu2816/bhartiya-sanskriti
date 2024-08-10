import { SERVER_URL } from "../storeContext/storeContext";
import axios from "axios"

// get user-products
const getAdminproducts=async(adminToken)=>{
 const url=`${SERVER_URL}/api/admin/get-product`
 const response= await axios.post(url,{},{headers:{admintoken:adminToken}})
 console.log(response)
 if(response.data.success){
  return response.data.data;
 }
 else{
  return;
 }
}

export  {getAdminproducts}