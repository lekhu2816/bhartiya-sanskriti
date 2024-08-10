import { SERVER_URL } from "../storeContext/storeContext";
import axios from "axios"

// fetching userData
const getUserData=async(token)=>{
    const url=`${SERVER_URL}/api/user/info`
    const response = await axios.post(url, {}, { headers: { 'token': token } });
     const info= response.data.data;
    //  console.log(info)
    if(response.data.success){
     const [firstname,lastname]=info.name.split(" ");
     const email=info.email;
     const phoneNo=info.phoneNo;
     const profile=info.profile;
     return {firstname,lastname,email,phoneNo,profile};
    }
    else{
      alert(response.data.message)
    }
}



export {getUserData}