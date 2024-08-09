import React, { useState } from "react";
import "./product.css";
import { useParams } from "react-router-dom";
import ProductCard from "../../component/productCard/productCard.jsx";
const images = [
  "https://www.libas.in/cdn/shop/files/34215.jpg?v=1713522836&width=1080",
  "https://static.toiimg.com/photo/100920680/100920680.jpg",
  "https://static.toiimg.com/photo/88900096/88900096.jpg",
  "https://content.tupaki.com/h-upload/2023/09/07/154500-1.webp",
];
const Product = () => {
  const [product, setProduct] = useState([1, 2, 3, 4, 5, 6, , 7, 8, 9, 0, 0]);
  const [imgIndex,setImgIndex]=useState(0);
  const { id } = useParams();
  const handleSetImage=(index)=>{
    setImgIndex(index);
  }
  return (
    <div className="product-page">
      <div className="product">
        <div className="product-images">
          <div className="section-left">
            {images.map((img, index) => (
              <div onClick={()=>handleSetImage(index)}  className="side-images ">
                <img className={imgIndex==index?'setBorder':''} src={images[index]} alt="" />
              </div>
            ))}
          </div>
          <div className="section-right">
            <img src={images[imgIndex]} alt="" />
          </div>
        </div>
        <div className="product-description">
          <h4 id="category">Fashion</h4>
          <h2 id="name">Silk suit for Women </h2>
          <p id="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quis, officiis eveniet amet eos aut molestiae quia dolore? Sapiente, magnam? A facilis ab cupiditate exercitationem. Sint excepturi impedit nulla itaque!</p>
          <div className="price">
            <h3>₹3999</h3>
            <p>20%</p>
          </div>
          <p id="discount">₹5999</p>
          <button id="btn">
          <i class="fa-solid fa-cart-shopping"></i>
             Add to cart
          </button>
 
        </div>
      </div>
      <h1>Similar products...</h1>
      <div className="product-suggestion">
        {product.map(() => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
};

export default Product;
