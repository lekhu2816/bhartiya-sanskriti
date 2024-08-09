import React, { useState } from "react";
import "./adminProduct.css";
const images=["https://pixlr.com/images/index/ai-image-generator-one.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s"]


const AdminProduct = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const description =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic sed ad facilis nisi similique totam beatae mollitia aliquid ipsam dicta. Quis non earum, quaerat soluta sit, tempora perspiciatis porro laudantium ea ad maiores itaque deleniti at vel esse rem harum eveniet repudiandae mollitia corrupti. Harum ducimus quod nostrum nam natus?";
  const words = description.split(" ");
  const wordLimit = 25;
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const availability = "Out Of Stock";
  return (
    <div className="admin-product">
      <div className="left">
        <div className="fields">
          <h3>Product_Id :</h3>
          <p>1568234547890765</p>
        </div>
        <div className="fields">
          <h3>Name :</h3>
          <p>Silk Saree</p>
        </div>
        <div className="fields">
          <h3>Category :</h3>
          <p>Fashion & Clothing</p>
        </div>
        <div className="fields">
          <h3>State :</h3>
          <p>Uttar Pradesh</p>
        </div>
        <div className="fields">
          <h3>Amount :</h3>
          <p>₹2000</p>
        </div>
        <div className="fields">
          <h3>Discount :</h3>
          <p>10%</p>
        </div>
        <div className="fields">
          <h3>Availability :</h3>
          <p className={availability === "In Stock" ? "colGreen" : "colRed"}>
            {availability}
          </p>
        </div>
        <div className="fields">
          <h3>Quantity :</h3>
          <p>49</p>
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
          <p className="tags">Saree,Fashion,Banaras,Women</p>
        </div>
      </div>
      <div className="right">
        <Carousel images={images}></Carousel>
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
