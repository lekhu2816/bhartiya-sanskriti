import React from 'react'
import './createBlogButton.css'
const CreateBlogButton = ({setBlogPopup}) => {
  return (
    <div className='create-blog-button'>
    <button onClick={()=>(setBlogPopup((prev)=>!prev))} className="icon-btn add-btn">
    <div className="add-icon"></div>
    <div className="btn-txt">Create Blog</div>
</button>
    </div>
  )
}

export default CreateBlogButton