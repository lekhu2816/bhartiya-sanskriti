import React from "react";
import "./adminNavbar.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate=useNavigate();
  return (
    <div className="admin-navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-link">
        <ul>
        <li>
          <a href="/">Home</a>
          </li>
          <li>
            <a href="/admin/addproduct">Add-Product</a>
          </li>
          <li>
            <a href="/admin/products">Products</a>
          </li>
        </ul>
      </div>

      <div className="login-button">
        <button onClick={()=>navigate('/admin/signup')}>Login</button>
      </div>
    </div>
  );
};

export default AdminNavbar;
