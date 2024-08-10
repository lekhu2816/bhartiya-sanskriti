import React, { useContext, useEffect, useRef, useState } from "react";
import "./adminProfile.css";
import axios from "axios";
import { StoreContext } from "../../storeContext/storeContext";
const AdminProfile = () => {
  const [btn, setBtn] = useState(false);
  const { SERVER_URL, adminToken, getUserInfo } = useContext(StoreContext);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: "",
    profile: "",
  });
  const handleUserInfo = (event) => {
    setBtn(true);
    const name = event.target.name;
    const value = event.target.value;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  const fileInputRef = useRef(null);

  const handleIconClick = (event) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  // update user-info
  const updateUserInfo = async () => {
    const url = `${SERVER_URL}/api/admin/update/info`;
    const name = userData.firstname + " " + userData.lastname;
    if (userData.phoneNo.length != 10) {
      alert("Enter a valid Phone No");
      setBtn(false);
      return;
    }
    const phoneNo = userData.phoneNo;
    const obj = { name, phoneNo };
    if (confirm("Want to make changes")) {
      const response = await axios.post(url, obj, {
        headers: { admintoken: adminToken },
      });
      if (response.data.success) {
        getAdminData()
        setBtn(false);
        alert(response.data.message);
      }
    } else {
      setBtn(false);
      alert(response.data.message)
    }
  };
  // update user profile
  const handleFilechange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = `${SERVER_URL}/api/admin/update/profile-image`;
      const formData = new FormData();
      formData.append("image", file);
      const response = await axios.post(url, formData, {
        headers: {
          admintoken: adminToken,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        console.log(response.data.message);
        getAdminData();
        // getUserInfo();
      }
    }
  };

  // getting userData
  const getAdminData = async () => {
    const url = `${SERVER_URL}/api/admin/info`;
    const response = await axios.post(url, {}, { headers: { admintoken: adminToken } });
    const info = response.data.data;
    if (response.data.success) {
      const [firstname, lastname] = info.name.split(" ");
      const email = info.email;
      const phoneNo = info.phoneNo;
      const profile = info.profile;
      setUserData({ firstname, lastname, email, phoneNo, profile });
    } else {
      alert(response.data.message);
    }
  };
  useEffect(() => {
    if (adminToken) {
      getAdminData();
    }
  }, [adminToken]);
  return (
    <div className="admin-profile">
      <h1>Admin Profile</h1>
      <div className="profile-logo">
        <div className="user-image">
          <img src={userData.profile} alt="User" />
        </div>
        <div className="update-profile" onClick={handleIconClick}>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <h1>
          <span>Hey!</span> {userData.firstname} {userData.lastname}
        </h1>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFilechange}
      />

      <div className="user-info">
        <div className="firstname input-box">
          <p>Firstname *</p>
          <input
            onChange={handleUserInfo}
            type="text"
            name="firstname"
            value={userData.firstname}
            placeholder="firstname"
          />
        </div>
        <div className="firstname input-box">
          <p>Lastname *</p>
          <input
            onChange={handleUserInfo}
            type="text"
            name="lastname"
            value={userData.lastname}
            placeholder="lastname"
          />
        </div>
      </div>

      <div className="user-info">
        <div className="email input-box">
          <p>Email</p>
          <input
            type="email"
            placeholder="email"
            value={userData.email}
            readOnly
          />
        </div>
        <div className="phone input-box">
          <p>Phone No</p>
          <input
            onChange={handleUserInfo}
            type="number"
            name="phoneNo"
            value={userData.phoneNo}
            placeholder="Phone No"
            maxLength={10}
          />
        </div>
      </div>

      <div className="update-button">
        <button
          onClick={updateUserInfo}
          style={{ backgroundColor: btn ? "#f5004e" : "#f5004e99" }}
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
