import React, { useContext, useEffect, useState } from 'react'
import './makeOrder.css'
import { useNavigate } from 'react-router-dom'


const ConfirmOrder = () => {
    const navigate=useNavigate();
    const [orderData,setOrderData]=useState(null);

    const getTotalCartAmount=()=>{
        return 5000;
    }
      
     
      const makeOrder=async()=>{

      }

  return (
    <div className='confirm-order'>
        {orderData?"":<div  className='confirm-order-title'>
     <h1>Payment Confirmation</h1>
     </div>}
     

      {orderData=="confirm"? <div  className='confirm-order-title-accept'>
     <h1>Success</h1>
     </div>:""}
     {orderData=="reject"? <div  className='confirm-order-title-reject'>
     <h1>Cancelled</h1>
     </div>:""}
       {orderData=="confirm"? <div className="order-status">
         <div className='logo' id="success-logo">
         <i className="fa-solid fa-check"></i>
         </div>
         <p >Order Recieved </p>
         <p>Thank you for your purchase.</p>
      </div>: "" }
      {orderData=="reject"?<div className="order-status">
        <div className='logo' id="reject-logo">
        <i className="fa-solid fa-xmark"></i>
         </div>
         <p> Order Cancelled</p>
      </div>: ""}
      {orderData?"":<div className='order-description'>
      <p>Please confirm your payment</p>
      <h2>Total Amount: ${getTotalCartAmount()+2}</h2>
      </div>}
      
      
       {orderData=="confirm"?<button onClick={()=>{navigate('/user-order')}} className='order-status-button-accept'>Track Your Order</button>:""}
      {orderData=="reject"?<button onClick={()=>{navigate('/')}} className='order-status-button-reject'>Order Now</button>:""}
      
     {orderData?"":<div className="confirm-order-button">
        <button onClick={()=>{setOrderData("reject")}} className='reject order-btn'>Reject</button>
        <button onClick={()=>setOrderData("confirm")} className='make-payment order-btn'>Confirm</button>
      </div>}
     
      
     
    </div>
  )
}

export default ConfirmOrder
