import React, { useContext, useState } from "react";
import "./adminLogin.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from "axios";
import { StoreContext } from "../../storeContext/storeContext";
const AdminLogin = () => {
  const { SERVER_URL, adminToken, setAdminToken } = useContext(StoreContext);
  const {} = useContext(StoreContext);
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState("signin");
  const [showpassword, setShowPassword] = useState(true);
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdminData((prev) => ({ ...prev, [name]: value }));
  };
  const handleUserLogin = async (e) => {
    e.preventDefault();
    if (currentState == "signin") {
      const new_URL = `${SERVER_URL}/api/admin/signin`;
      const response = await axios.post(new_URL, adminData);
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token);
        setAdminToken(response.data.token);
        setAdminData({ name: "", email: "", password: "" });
      } else {
        alert(response.data.message);
      }
    } else {
      const new_URL = `${SERVER_URL}/api/admin/signup`;
      const response = await axios.post(new_URL, adminData);
      console.log(response.data);
      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token);
        setAdminToken(response.data.token);
        setAdminData({ name: "", email: "", password: "" });
      } else {
        alert(response.data.message);
      }
    }
  };
  return (
    <div className="adminLogin-page">
      <div className="adminLogin">
        <div className="login-left-section">
          <h1>Hello</h1>
        </div>
        <div className="login-right-section">
          <div className="heading">
            <h1>
              {currentState == "signin"
                ? "Sign in as Admin"
                : "Sign up as Admin"}
            </h1>
          </div>
          <form onSubmit={handleUserLogin} className="user-login-container">
            {currentState == "signin" ? (
              <></>
            ) : (
              <div className="input-field">
                <i className="fa-regular fa-user"></i>
                <input
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Username"
                  name="name"
                  value={adminData.name}
                />
              </div>
            )}

            <div className="input-field">
              <i className="fa-regular fa-envelope"></i>
              <input
                onChange={onChangeHandler}
                type="email"
                id="useremail"
                placeholder="Email"
                name="email"
                value={adminData.email}
              />
            </div>
            <div className="input-field">
              <input
                onChange={onChangeHandler}
                type={showpassword ? "password" : "text"}
                id="userpassword"
                placeholder="Password"
                name="password"
                value={adminData.password}
              />
              <i
                onClick={() => setShowPassword((currVal) => !currVal)}
                className={`fa-regular ${
                  showpassword ? "fa-eye" : "fa-eye-slash"
                }`}
              ></i>
            </div>
            {currentState == "signin" ? (
              <div className="signin-checkbox">
                <div className="remember-me">
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>
                <div className="forget-password">
                  <p>Forget password?</p>
                </div>
              </div>
            ) : (
              <div className="checkbox">
                <input type="checkbox" required />
                <p>By continuing, i agree the terms of use & privacy policy</p>
              </div>
            )}
            <div className="submit-button">
              <button type="submit">
                {currentState == "signin" ? "Login" : "Create Account"}
              </button>
            </div>
            {currentState == "signin" ? (
              <p className="account">
                Create Account ?{" "}
                <span
                  onClick={() => {
                    setCurrentState("signup");
                  }}
                >
                  {" "}
                  Click here
                </span>
              </p>
            ) : (
              <p className="account">
                Already have account ?{" "}
                <span
                  onClick={() => {
                    setCurrentState("signin");
                  }}
                >
                  {" "}
                  Click here
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
