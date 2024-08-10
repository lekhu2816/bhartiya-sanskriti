import React, { useState } from "react";
import "./adminProduct.css";
const images=["https://pixlr.com/images/index/ai-image-generator-one.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s"]


const AdminProduct = ({product}) => {
  console.log(product)
  const [isExpanded, setIsExpanded] = useState(false);
  const description =product.description
   ;
  const words = description.split(" ");
  const wordLimit = 25;
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const availability = product.stock.availability;
  return (
    <div className="admin-product">
      <div className="left">
        <div className="fields">
          <h3>Product_Id :</h3>
          <p>{product._id}</p>
        </div>
        <div className="fields">
          <h3>Name :</h3>
          <p>{product.name}</p>
        </div>
        <div className="fields">
          <h3>Category :</h3>
          <p>{product.category}</p>
        </div>
        <div className="fields">
          <h3>State :</h3>
          <p>{product.state}</p>
        </div>
        <div className="fields">
          <h3>Amount :</h3>
          <p>₹{product.price.amount}</p>
        </div>
        <div className="fields">
          <h3>Discount :</h3>
          <p>{product.price.discount}%</p>
        </div>
        <div className="fields">
          <h3>Availability :</h3>
          <p className={availability == "In stock" ? "colGreen" : "colRed"}>
            {availability}
          </p>
        </div>
        <div className="fields">
          <h3>Quantity :</h3>
          <p>{product.stock.quantity}</p>
        </div>
      </div>
      <div className="middle">
        <div className="product-desc">
          <p>
            <h3>Description : </h3>
            {isExpanded || words.length <= wordLimit
              ? description
              : `${words.slice(0, wordLimit).join(" ")}...`}
            {words.length > wordLimit && (
              <span className="read-more" onClick={toggleReadMore}>
                {isExpanded ? " Show Less" : " Read More"}
              </span>
            )}
          </p>
        </div>
        <div className="fields">
          <h3>Tags:</h3>
           {product.tags.map((tag,idx)=>( <p key={idx} className="tags">{tag},</p>))}
         
        </div>
      </div>
      <div className="right">
        <Carousel images={product.images}></Carousel>
      </div>
    </div>
  );
};


// image carausel


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="admin-carousel">
      <button onClick={goToPrevious} className="carousel-button left">
        ❮
      </button>
      <div className="carousel-images">
        <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      </div>
      <button onClick={goToNext} className="carousel-button right">
        ❯
      </button>
    </div>
  );
};




export default AdminProduct;
