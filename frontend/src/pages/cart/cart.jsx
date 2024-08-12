import React, { useState } from "react";
import "./cart.css";
import CartItem from "../../component/cartItem/cartItem";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [cartData,setCartData]=useState([1,2,3,4,5])
  const navigate=useNavigate();
  const handleOrder=()=>{
    if(cartData){
       navigate('/placeorder')
    }
    else{
      alert("Please add products")
    }
  }
  return (
    <>
    <div className="user-cart">
      <div className="left">
        <div className="cart-header">
          <h1>Shopping Bag</h1>
          <p>
            <span>2 items</span> in your bag
          </p>
          <div className="cart-items">
            <div className="cart-item-desc">
              <h3>Product</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Total Price</h3>
            </div>
            {cartData.map(()=>(
              <>
              <CartItem></CartItem>
              <hr />
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="coupon-code">
          <p>Apply coupon code to get offer and benefits and save upto 15%</p>
          <input type="text" placeholder="Coupon Code" />
          <button>Apply</button>
        </div>
        <div className="cart-total">
          <h3>Cart Total</h3>
          <div className="cart-desc">
            <div className="display-flex">
              <p>Shopping Total</p>
              <p>3000</p>
            </div>
            <div className="display-flex">
              <p>Discount</p>
              <p>-300</p>
            </div>
            <div className="display-flex">
              <p>Delivery Charge</p>
              <p>50</p>
            </div>
            <div className="display-flex total">
              <p>Cart Total</p>
              <p>2750</p>
            </div>
          </div>
          <button onClick={handleOrder}>Order now</button>
        </div>
      </div>
    </div>


    {/* cart Footer  */}


    <div className="cart-footer">
      <div className="footer-box">
      <div className="logo">
      <i class="fa-solid fa-truck"></i>
      </div>
      <div className="instruction">
        <h3>Free Delivery</h3>
        <p>On order above 500</p>
      </div>
    </div>


    <div className="footer-box">
      <div className="logo">
      <i class="fa-solid fa-phone"></i>
      </div>
      <div className="instruction">
        <h3>Call Us Anytime</h3>
        <p>+91 5678902457</p>
      </div>
    </div>


    <div className="footer-box">
      <div className="logo">
      <i class="fa-brands fa-whatsapp"></i>
      </div>
      <div className="instruction">
        <h3>Chat With Us</h3>
        <p>24 hour support</p>
      </div>
    </div>  
    </div>
    </>
  );
};

export default Cart;
