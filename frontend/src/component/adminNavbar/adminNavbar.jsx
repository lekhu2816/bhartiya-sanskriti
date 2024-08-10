import React, { useContext } from "react";
import "./adminNavbar.css";
import logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import userLogo from '../../assets/userLogo.jpg'
import { Link } from "react-router-dom";
import { StoreContext } from "../../storeContext/storeContext";

const AdminNavbar = () => {
  const {adminToken,setAdminToken}=useContext(StoreContext);

  const navigate=useNavigate();
  const adminLogout=()=>{
     if(confirm("Want to Logout")){
      localStorage.removeItem('adminToken')
      setAdminToken("");
      navigate('/')
     }
  }
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

      {!adminToken ? (
          <div className="login-button">
            <button onClick={() => navigate("/admin/login")}>Login</button>
          </div>
        ) : (
          <div className="login-dropdown">
            <div className="user-logo">
              <img src={userLogo} alt="userLogo" />
            </div>
            <div className="dropdown">
              <div id="username">
                <p>Hey</p>
                <p>Lekhu</p>
              </div>
              <hr />
              <Link to={"/admin/profile"} className="dropdown-item">
                <i className="fa-solid fa-user"></i>
                <p>My Profile</p>
              </Link>
              <div onClick={adminLogout} className="dropdown-item">
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
    </div>
  );
};

export default AdminNavbar;
