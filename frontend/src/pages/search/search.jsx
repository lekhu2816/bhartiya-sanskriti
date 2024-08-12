import React, { useState } from 'react'
import './search.css'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../../component/productCard/productCard'
import Advertisement from '../../component/advertisement/advertisement'
const Search = () => {
  const [products,setProducts]=useState([1,2,3,4,5,6,7,8,9,0])
    const [searchParams] = useSearchParams();
    const query=searchParams.get('query');
  return (
    <div className='search'>
     
        <Advertisement></Advertisement>
      
      <div className="filter">
       <div className="sort-by">
        <select>
          <option value="">Sort By</option>
          <option value="">High to low</option>
          <option value="">Low to high</option>
        </select>
       </div>
       <div className="rating">
       <select>
          <option value="">Rating</option>
          <option value="">High to Low</option>
          <option value="">Low to High</option>
        </select>
       </div>
      </div>
      <div className="products">
       {products.map((prod,index)=>(
        <ProductCard></ProductCard>
       ))}
      </div>
    </div>
  )
}

export default Search;
