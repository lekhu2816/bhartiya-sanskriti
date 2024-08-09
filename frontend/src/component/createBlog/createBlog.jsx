import React, { useState } from "react";
import "./createBlog.css";

const CreateBlog = () => {
    const [blogData,setBlogData]=useState({
        title:"",
        description:""
    })
    const onChangeHandleBlog=(event)=>{
        
        const name=event.target.name;
        const value=event.target.value;
        setBlogData((prev)=>({...prev,[name]:value}))

    }
    console.log(blogData)
  return (
    <>
    <div className="create-blog">
      <div className="container">
        <div className="heading">Create Blog</div>
        <form action="" className="form">
          <input onChange={onChangeHandleBlog}
            required
            className="input"
            type="text"
            name="title"
            value={blogData.value}
            placeholder="Enter the title"
          />
          <textarea
          onChange={onChangeHandleBlog}
            className="input"
            cols="30"
            rows="8"
            name="description"
            value={blogData.value}
            placeholder="Enter description"
          ></textarea>
          <input className="login-button" type="submit" value="Create" />
        </form>
      </div>
      </div>
    </>
  );
};

export default CreateBlog;
