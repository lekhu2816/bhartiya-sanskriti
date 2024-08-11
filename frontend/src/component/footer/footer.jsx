import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="section-left">
          <div className="logo">
            {/* <img src={logo} alt="" /> */}
            <h2>BhartiyaSanskriti</h2>
          </div>
          <div className="about-us">
            <p>
              Embracing the rich cultural heritage of India by bringing local
              arts, crafts, and traditions to the global market. Join us in
              celebrating and supporting local artisans.
            </p>
          </div>
          <div className="desc">
            <div className="display-flex">
              <i
                style={{ color: "red" }}
                className="fa-solid fa-location-dot"
              ></i>
              <p>1421/17 Y-Block,Kidwai Nagar,Kanpur</p>
            </div>
            <div className="display-flex">
              <i
                style={{ color: "orangered" }}
                className="fa-solid fa-envelope"
              ></i>
              <p>bhartiyasanskriti@gmail.com</p>
            </div>
            <div className="display-flex">
              <i style={{ color: "green" }} className="fa-solid fa-phone"></i>
              <p>+91 763 050 9024</p>
            </div>
          </div>
        </div>
        <div className="section-middle">
          <h2>Customer Service</h2>
          <div className="display-flex">
            <h3>&gt;</h3>
            <p>FAQ</p>
          </div>
          <div className="display-flex">
            <h3>&gt;</h3>
            <p>Contact</p>
          </div>
          <div className="display-flex">
            <h3>&gt;</h3>
            <p>Delivery Information</p>
          </div>
          <div className="display-flex">
            <h3>&gt;</h3>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="section-right">
          <h2>Follow us</h2>

          <div className="social-media">
            <div className="facebook">
              <i style={{ color: "blue" }} class="fa-brands fa-facebook"></i>
            </div>
            <div className="instagram">
              <i style={{ color: "red" }} class="fa-brands fa-instagram"></i>
            </div>
            <div className="twitter">
              <i class="fa-brands fa-x-twitter"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 BhartiyaSanskriti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
