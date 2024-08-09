import React, { useState } from "react";
import "./blog.css";
import CreateBlog from "../../component/createBlog/createBlog";
import CreateBlogButton from "../../component/createBlogButton/createBlogButton";
import BlogTemplate from "../../component/blogTemplate/blogTemplate";
const Blog = () => {
  const [blogList,setBlogList]=useState([1,2,3,4])
  const [blogPopup, setBlogPopup] = useState(false);
  return (
    <div className="blog">
      <div className="create-button">
        <CreateBlogButton setBlogPopup={setBlogPopup} />
      </div>
      {blogPopup?<div  className="create-blog-container">
        <div  className="create-blog-popup">
          <CreateBlog/>
        </div>
      </div>:<></>}
      <div className="blog-container">
          {blogList.map((item,index)=><BlogTemplate></BlogTemplate>)}
      </div>
    </div>
  );
};

export default Blog;
