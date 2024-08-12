import React, { useContext, useState } from "react";
import "./placeOrder.css";
import {useNavigate} from "react-router-dom"
const Placeorder = () => {
  const navigate=useNavigate();

  const [deliveryData,setDeliveryData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    pincode:"",
    country:"",
    phone:""
  });
   
  
  const onHandleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setDeliveryData((data)=>({...data,[name]:value}))
  }

  const placeOrder=(event)=>{
   event.preventDefault();
    navigate('/payment')
  }
  return (
    <form onSubmit={placeOrder} className="placeorder" >
      <div className="placeorder-left">
        <h1>Delivery information</h1>
        <div className="multi-fields">
          <input type="text" placeholder="Firstname" name="firstName" onChange={onHandleChange} value={deliveryData.firstName} required/>
          <input type="text" placeholder="Lastname" name="lastName" onChange={onHandleChange} value={deliveryData.lastName} />
        </div>
        <input type="email" placeholder="Your Email" name="email" onChange={onHandleChange} value={deliveryData.email}/>
        <input type="text" placeholder="Street" name="street" onChange={onHandleChange} value={deliveryData.street} required />
        <div className="multi-fields">
          <input type="text" placeholder="City" name="city" onChange={onHandleChange} value={deliveryData.city} required />
          <input type="text" placeholder="State" name="state" onChange={onHandleChange} value={deliveryData.state} required/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Pincode" name="pincode" onChange={onHandleChange} value={deliveryData.pincode} required />
          <input type="text" placeholder="Country" name="country" onChange={onHandleChange} value={deliveryData.country} required/>
        </div>
        <input type="text" placeholder="Phone number" name="phone" onChange={onHandleChange} value={deliveryData.phone} required/>
      </div>
      <div className="placeorder-right">
        <h1>Card Total</h1>
        <div className="subTotal">
          <p>Subtotal</p>
          <p>RS200</p>
        </div>
        <hr />
        <div className="subTotal">
          <p>Delivery Fee</p>
          <p>$2</p>
        </div>
        <hr />
        <div className="subTotal">
          <p>Tax</p>
          <p>$1</p>
        </div>
        <hr />
        <div className="subTotal">
          <h2>Total</h2>
          <p>Rs399</p>
        </div>
        <hr />
        <button type="submit">click here to proceed</button>
      </div>
    </form>
  );
};

export default Placeorder;
