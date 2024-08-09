import React, { useState } from "react";
import "./order.css";
import box from "../../assets/box.png";
const Order = () => {
  const [orderData,setOrderData]=useState([1,2,3,4,5,6])
  return (
    <div className="order">
      {orderData.map(()=>(
        <div className="orderCard">
        <div className="box-img">
          <img src={box} alt="" />
        </div>
        <div className="order-desc">
          <div className="order-id">
            <h2>Order_id</h2>
            <p>345678903212345</p>
          </div>
          <div className="order-item">
            <p>silk saree,Rajasthani pagadi,Maharstra saree</p>
          </div>
          <div className="order-quantity">
            <p>
              Items <span>5</span>
            </p>
          </div>
        </div>
        <div className="order-address">
          <div className="order-status">
            <p>Delivered</p>
          </div>
          <div className="address">
            <p>1421/17 Y-Block kidwai Nagar, kanpur,Uttar pradesh</p>
          </div>
          <div className="contact-no">
            <p>
              Contact No : <span>+91 675 328 9011</span>
            </p>
          </div>
          <div className="order-date">
            <p>12/08/2024</p>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Order;
