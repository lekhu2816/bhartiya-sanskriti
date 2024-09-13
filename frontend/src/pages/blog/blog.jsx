import React, { useContext, useEffect, useState } from "react";
import "./blog.css";
import CreateBlog from "../../component/createBlog/createBlog";
import CreateBlogButton from "../../component/createBlogButton/createBlogButton";
import BlogTemplate from "../../component/blogTemplate/blogTemplate";
import { StoreContext } from "../../storeContext/storeContext";
import axios from "axios";
const Blog = () => {
  const {SERVER_URL}=useContext(StoreContext);
  const [blogList,setBlogList]=useState([])
  const [blogPopup, setBlogPopup] = useState(false); 
  const getBlogs =async()=>{
    const url=`${SERVER_URL}/api/blog/get-blog`
    const response=await axios.get(url);
    if(response.data.success){
     setBlogList(response.data.data);
    }
    else{
      console.log(response.data.message);
    }
    
  }
  useEffect(()=>{
   getBlogs();
  },[])
  return (
    <div className="blog">
      <div className="create-button">
        <CreateBlogButton setBlogPopup={setBlogPopup} />
      </div>
      {blogPopup?<div  className="create-blog-container">
        <div  className="create-blog-popup">
          <CreateBlog setBlogPopup={setBlogPopup}/>
        </div>
      </div>:<></>}
      <div className="blog-container">
          {blogList.map((item,index)=><BlogTemplate item={item} key={index}></BlogTemplate>)}
      </div>
    </div>
  );
};

export default Blog;
