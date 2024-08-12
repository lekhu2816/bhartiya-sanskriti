import React from 'react'
import './productCard.css'
import { useNavigate } from 'react-router-dom'
const src="https://www.gethucinema.com/wp-content/uploads/2024/02/KrithiShetty-100-822x1024.jpg"
const ProductCard = () => {
    const navigate=useNavigate();
    const onClickHandle=()=>{
     navigate('/product/123456')
    }
  return (
    <div onClick={()=>onClickHandle()} className='product-card'>
        <div className="card-image">
            <img src={src} alt="" />
        </div>
        <div className="card-desc">
        <div className="product-name">
            <h3>Fashion</h3>
            <p>Women Long suit</p>
        </div>
        <div className="product-price">
            <p>3999</p>
            <p>5999</p>
            <p>(20% OFF)</p>
        </div>
        <div className="product-rating">
            <p>4.2</p>
            <i class="fa-solid fa-star"></i>
        </div>
        </div>
    </div>
  )
}

export default ProductCard