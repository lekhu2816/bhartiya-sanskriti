import React, { useContext, useEffect, useRef, useState } from "react";
import "./userProfile.css";
import userLogo from "../../assets/userLogo.jpg";
import axios from 'axios'
import { StoreContext } from "../../storeContext/storeContext";
const UserProfile = () => {
  const {SERVER_URL,token}=useContext(StoreContext);
    const[userData,setUserData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        phoneNo:'',
        profile:''
       })
    const handleUserInfo=(event)=>{
       const name=event.target.name;
       const value=event.target.value;
       setUserData((prev)=>({...prev,[name]:value}))
       
    }
  const fileInputRef = useRef(null);



  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const getUserData=async()=>{
  
      const url=`${SERVER_URL}/api/user/info`
      const response = await axios.post(url, {}, { headers: { 'token': token } });
       const info= response.data.data;
      if(response.data.success){
       console.log(info)
      }
      else{
        alert(response.data.message)
      }
    
  }
  useEffect(()=>{
  if(token){
    getUserData()
  }
  },[token])
  return (
    <div className="user-profile">
      <h1>My Profile</h1>
      <div className="profile-logo">
        <div className="user-image">
          <img src={userLogo} alt="User" />
        </div>
        <div className="update-profile" onClick={handleIconClick}>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <h1>
          <span>Hey!</span> Lekhansh Sachan
        </h1>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
      />

      <div className="user-info">
        <div className="firstname input-box">
          <p>Firstname *</p>
          <input onChange={handleUserInfo} type="text"name="firstname"  value={userData.firstname} placeholder="firstname" />
        </div>
        <div className="firstname input-box">
          <p>Lastname *</p>
          <input onChange={handleUserInfo} type="text" value={userData.lastname} placeholder="lastname" />
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
          <input onChange={handleUserInfo} type="number" value={userData.phoneNo} placeholder="Phone No" />
        </div>
      </div>

      <div className="update-button">
        <button>Save changes</button>
      </div>
    </div>
  );
};

export default UserProfile;
