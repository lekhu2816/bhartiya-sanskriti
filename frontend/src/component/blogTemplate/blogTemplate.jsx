import React, { useState } from "react";
import "./blogTemplate.css";
import { useNavigate } from "react-router-dom";
const BlogTemplate = () => {
  const navigate=useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [like, setLike] = useState(false);
  const [commentBox,setCommentBox]=useState(false);
  const [comment,setComment]=useState("");
  const onHandleChange=(event)=>{
      setComment(event.target.value)
  }
  const _id="1233456ef546";

  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi iusto praesentium hic quibusdam, quas voluptate nam doloremque iste in ut debitis quae, ratione repellat. Velit, ab? Reiciendis itaque ullam vel vitae facilis, aspernatur at magnam iusto cumque, quisquam hic illo ex rerum ipsam veniam odit, animi expedita ab voluptates labore ad voluptas nulla iure quam. Laudantium ratione praesentium nam a ad facilis repellat quae, eos nulla perferendis sunt laboriosam omnis aut iusto officia! Corporis error consequuntur in! Ab reiciendis architecto tempore fugit, laboriosam atque natus tenetur minima magni quam. Nostrum, eligendi! Ea exercitationem qui excepturi dolorum eius, incidunt sapiente.";

  const words = description.split(" ");
  const wordLimit = 50;
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="blog-template">
      <div  onClick={()=>{navigate(`/blog/${_id}`)}} className="blog-header">
        <div className="user-img">
          <i class="fa-solid fa-user"></i>
        </div>
        <div className="user-desc">
          <p>
            Username{" "}
            <span>
              <i class="fa-solid fa-crown"></i>
            </span>
          </p>
          <p>
            Aug 20,2024 <span>. 1 min ago</span>
          </p>
        </div>
      </div>
      <div className="blog-title">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rem.
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
          <i onClick={()=>setCommentBox(true)} class="fa-regular fa-comment"></i>
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
        <p>23 Comments</p>
         
          <div className="like">
          <p>5</p>
          <i
            onClick={() => {
              setLike((prev) => !prev);
            }}
            class={`fa-${like ? "solid" : "regular"} fa-heart ${
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
