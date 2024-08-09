import React, { useContext, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import ProductDropdown from "../productDropdown/productDropdown";
import userLogo from "../../assets/userLogo.jpg";
import { StoreContext } from "../../storeContext/storeContext";
const Navbar = () => {
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const userLogout = () => {
    if (confirm("Do you want to Logout")) {
      localStorage.removeItem("token");
      setToken("");
      navigate('/')
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="user-navbar">
      <Link to={"/"} className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className={`menu-link ${isMenuOpen ? "open" : ""}`}>
        <ul className="responsive">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li className="product-category">
            <Link to="/">Product</Link>
            <div className="category-dropdown">
              <ProductDropdown />
            </div>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to={"/admin/products"} target="blank">
              Admin
            </Link>
          </li>
        </ul>
      </div>
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <i
          onClick={() => navigate(`/search?query=${query}`)}
          className="fa-solid fa-magnifying-glass"
        ></i>
      </div>
      <div className="right-section">
        <Link to={"/cart"} className="cart">
          <p>2</p>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>

        {/* user profile */}

        {!token ? (
          <div className="login-button">
            <button onClick={() => navigate("/user/login")}>Login</button>
          </div>
        ) : (
          <div className="login-dropdown">
            <div className="user-logo">
              <img src={userLogo} alt="userLogo" />
            </div>
            <div className="dropdown">
              <div id="username">
                <p>Hey</p>
                <p>Lekhansh</p>
              </div>
              <hr />
              <Link to={"/profile"} className="dropdown-item">
                <i className="fa-solid fa-user"></i>
                <p>My Profile</p>
              </Link>
              <Link to={"/order"} className="dropdown-item">
                <i className="fa-solid fa-box-open"></i>
                <p>Order</p>
              </Link>
              <div onClick={userLogout} className="dropdown-item">
                <i className="fa-solid fa-right-from-bracket"></i>
                <p>Logout</p>
              </div>
              <div className="dropdown-item">
                <i className="fa-solid fa-gear"></i>
                <p>Setting</p>
              </div>
            </div>
          </div>
        )}

        {/* hamberger menu */}

        <div className="hamburger-menu" onClick={toggleMenu}>
          <i className={`fa-solid fa-bars ${isMenuOpen ? "fa-times" : ""}`}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
