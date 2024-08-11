import React from "react";
import "./home.css";
import { products } from "../../API/apiFunction";
import Footer from "../../component/footer/footer";
import Carousel from "../../component/carousel/carousel";
import Advertisement from "../../component/advertisement/advertisement";
import ProductCard from "../../component/productCard/productCard";
const Home = () => {
  return (
    <div className="home-page">
      <Carousel></Carousel>
      <Advertisement></Advertisement>
      <h1 id="heading">POPULAR PRODUCTS</h1>
      {/* fashion category */}
      <div className="homepage-category">
        <h1>Popular in Fashion</h1>
        <div className="products">
          {products.map((product) => (
            <ProductCard></ProductCard>
          ))}
        </div>
      </div>
      {/* Jewellery  category*/}
      <div className="homepage-category">
        <h1>Popular in Jewellery</h1>
        <div className="products">
          {products.map((product) => (
            <ProductCard></ProductCard>
          ))}
        </div>
      </div>
      {/* handloom  category*/}
      <div className="homepage-category">
        <h1>Popular in Handloom</h1>
        <div className="products">
          {products.map((product) => (
            <ProductCard></ProductCard>
          ))}
        </div>
      </div>
      {/* arts and craft category */}
      <div className="homepage-category">
        <h1>Popular in Arts & Craft</h1>
        <div className="products">
          {products.map((product) => (
            <ProductCard></ProductCard>
          ))}
        </div>
      </div>
      <hr />
      <div className="services">
        <div className="display-flex">
          <i style={{color:"skyblue"}} class="fa-solid fa-truck"></i>
          <p><span>Free shipping</span> Over ₹1000</p>
        </div>
        <div className="display-flex">
        <i style={{color:"orangered"}} class="fa-solid fa-arrow-right-from-bracket"></i>
          <p><span>Money back</span> Return within 7 days</p>
        </div>
        <div className="display-flex">
        <i style={{color:"blue"}} class="fa-solid fa-tags"></i>
          <p><span>25% off</span> Over ₹5000</p>
        </div>
        <div className="display-flex">
        <i style={{color:"red"}} class="fa-regular fa-circle-question"></i>
          <p><span>Any Questions?</span> expert is ready</p>
        </div>
      </div>
      <hr />
      <Footer></Footer>
    </div>
  );
};

export default Home;
