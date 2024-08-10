import { createContext, useEffect, useState } from "react";
import { getUserData } from "../API/apiFunction";
import axios from "axios";
export const SERVER_URL = "http://localhost:5001";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [adminToken,setAdminToken]=useState("");
  const [userInfo, setUserInfo] = useState({ firstname: "", profile: "" });

//   get user-information
  const getUserInfo = async () => {
    const url = `${SERVER_URL}/api/user/info`;
    const response = await axios.post(url, {}, { headers: { token: token } });
    const info = response.data.data;
    if (response.data.success) {
      const [name] = info.name.split(" ");
      const profile = info.profile;
      setUserInfo({name,profile});
    } else {
      alert(response.data.message);
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setAdminToken(localStorage.getItem('adminToken'));
  }, []);
   useEffect(()=>{
     if(token){
        getUserInfo()
     }
   },[token])



// context value 
  const contextValue = {
    SERVER_URL,
    token,
    setToken,
    adminToken,
    setAdminToken,
    userInfo,
    setUserInfo,
    getUserInfo
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
