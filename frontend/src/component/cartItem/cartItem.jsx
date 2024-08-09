import React from "react";
import "./cartItem.css";
const imgURL =
  "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-lightbrown-zariwork-georgette-designer-salwar-suit-ssrm0033590_light_brown_1_1_2840ecc5-2042-4bea-b6c3-81ad06cb3296_large.jpg?v=1710245972";
const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="section-img">
        <img src={imgURL} alt="img" />
        <div className="desc">
          <p>Fashion</p>
          <h3>Silk Suit</h3>
        </div>
      </div>
      <div className="section-price">
        <div>₹4999</div>
      </div>
      <div className="section-quantity">
       <div className="btn">
       <button>-</button>
        <div>2</div>
        <button>+</button>
       </div>
      </div>
      <div className="section-total-price">
        <div>₹7998</div>
      </div>
    </div>
  );
};

export default CartItem;
