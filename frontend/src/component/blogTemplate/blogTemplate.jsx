import React, { useState } from "react";
import "./blogTemplate.css";
import { useNavigate } from "react-router-dom";
import moment from "moment"

const BlogTemplate = ({item}) => {
  // console.log(item)
  console.log(moment(item.date).fromNow())
  const navigate=useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [like, setLike] = useState(false);
  const [commentBox,setCommentBox]=useState(false);
  const [comment,setComment]=useState("");
  const onHandleChange=(event)=>{
      setComment(event.target.value)
  }
 

  const description =item.description;

  const words = description.split(" ");
  const wordLimit = 50;
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="blog-template">
      <div  onClick={()=>{navigate(`/blog/${item._id}`)}} className="blog-header">
        <div className="user-img">
         <img  style={{width:"3rem"}}src={item.profile} alt="" srcset="" />
        </div>
        <div className="user-desc">
          <p>
            {item.name} {" "} 
            <span>
              <i className="fa-solid fa-crown"></i>
            </span>
          </p>
          <p>
            {moment(item.date).format('MMM Do YYYY')} <span>. {moment(item.date).fromNow()}</span>
          </p>
        </div>
      </div>
      <div className="blog-title">
        <h1>
          {item.title}
        </h1>
      </div>
      <div className="blog-description">
        <p>
          {isExpanded || words.length <= wordLimit
            ? description
            : `${words.slice(0, wordLimit).join(" ")}...`}
          {words.length > wordLimit && (
            <span className="read-more" onClick={toggleReadMore}>
              {isExpanded ? " Show Less" : " Read More"}
            </span>
          )}
        </p>
      </div>
      <hr />
      <div  className="blog-footer">
        <div className="left">
          <span>&#128525;</span>
          <i onClick={()=>setCommentBox(true)} className="fa-regular fa-comment"></i>
          <div style={{ display: commentBox ? "flex" : "none" }} className="addcomment">
          <input onChange={onHandleChange} type="text" value={comment} name="comment" id="addComment" placeholder="Add a comment" />
          <div className="comment-btn">
            <button onClick={()=>setCommentBox(false)} >Cancel</button>
            <button style={
              {backgroundColor:comment? "#F5004F":"",
                color:comment? "white":""
              }
              }>Comment</button>
          </div>
          </div>
           
        </div>
        <div className="right">
        <p>{item.comments.length} Comments</p>
         
          <div className="like">
          <p>{item.likeCount}</p>
          <i
            onClick={() => {
              setLike((prev) => !prev);
            }}
            className={`fa-${like ? "solid" : "regular"} fa-heart ${
              like ? "setbg" : ""
            }`}
          ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;
