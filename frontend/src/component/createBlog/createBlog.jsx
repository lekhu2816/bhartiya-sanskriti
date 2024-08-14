import React, { useContext, useState } from "react";
import "./createBlog.css";
import axios from 'axios'
import star from '../../assets/star.png'
import { StoreContext } from "../../storeContext/storeContext";
const CreateBlog = ({setBlogPopup}) => {
      const {SERVER_URL,token}=useContext(StoreContext)
    const [blogData,setBlogData]=useState({
        title:"",
        description:""
    })
    const onChangeHandleBlog=(event)=>{
        
        const name=event.target.name;
        const value=event.target.value;
        setBlogData((prev)=>({...prev,[name]:value}))

    }
    const handleUsingAI=async()=>{
      const url=`${SERVER_URL}/api/ai/get-response`;
      console.log(blogData.description)
      const response=await axios.post(url,{message:`${blogData.description}...improve this prompt in minimum lines.`});
      if(response.data.success){
        setBlogData((prev)=>({...prev,description:response.data.data}))
      }
    }
    const addBlog=async(event)=>{
      event.preventDefault();
     const url=`${SERVER_URL}/api/blog/add-blog`
     const response=await axios.post(url,blogData,{headers:{'token':token}});
     if(response.data.success){
      setBlogData({
        title:"",
        description:""
    })
     }
     else{
      console.log(response.data.message)
     }
    }
  return (
    <>
    <div className="create-blog">
      <div className="container">
        <div className="heading">Create Blog</div>
        <div onClick={()=>(setBlogPopup(false))} className="close-btn">X</div>
        <form onSubmit={addBlog} className="form">
          <input onChange={onChangeHandleBlog}
            required
            className="input"
            type="text"
            name="title"
            value={blogData.title}
            placeholder="Enter the title"
          />
          <textarea
          onChange={onChangeHandleBlog}
            className="input"
            cols="30"
            rows="8"
            name="description"
            value={blogData.description}
            placeholder="Enter description"
          ></textarea>
          <div className="generate-ai">
            <img src={star} alt="" /> 
            <p onClick={handleUsingAI}>Improve using AI...</p>
          </div>
          <input className="login-button" type="submit" value="Create" />
        </form>
      </div>
      </div>
    </>
  );
};

export default CreateBlog;
