import React, { useContext, useState } from 'react'
import './blogPage.css'
import {useParams} from 'react-router-dom'
import { StoreContext } from '../../storeContext/storeContext'
const BlogPage = () => {
    const {userInfo}=useContext(StoreContext)
    const [comment,setComment]=useState([1,2,3,4,5,6,7,8,9,0])
    const [addComment,setAddcomment]=useState("");
    const onHandleChange=(event)=>{
        setAddcomment(event.target.value)
    }
  return (
    <div className='blog-page'>
     <div className="blog-header">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facilis! Aliquid accusamus, possimus nobis consequuntur eaque pariatur incidunt impedit voluptate perferendis magnam reprehenderit, doloribus molestias atque dolores autem delectus beatae consectetur deserunt voluptatibus omnis laudantium dolor vel sed. Quidem ad vitae iste? Perferendis voluptatum aperiam veniam dolore deleniti aliquam incidunt?
        </p>
      </div>
      <hr />
      <div className="comment-section">
        <div className="comment-left">
            <img src={userInfo.profile} alt="" />
        </div>
        <div className="comment-right">
          <input onChange={onHandleChange} value={addComment} type="text" placeholder='Add a comment' />
          <div className="comment-btn">
            <button>Cancel</button>
            <button style={{backgroundColor:addComment?"#F5004F":"",
                color :addComment?"white":""
            }} >comment</button>
          </div>
        </div>
       
      </div>
      {comment.map(()=>(
        <>
        <div className="comment">
            <div className="left">
               <p>L</p>
            </div>
            <div className="right">
            <div className="info">
                <p>Username</p>
                <p style={{fontStyle:"italic",color:"#616161"}}>2 hours ago</p>
            </div>
            <div  className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem est dignissimos ad doloremque nam veniam saepe voluptates voluptatem animi!
            </div>
            </div>
        </div>
        <hr  />
        </>
      ))}
      
    </div>
  )
}

export default BlogPage