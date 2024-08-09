import React from 'react'
import './productDropdown.css'
const northIndianStates = [
    'Jammu and Kashmir',
    'Himachal Pradesh',
    'Punjab',
    'Uttarakhand',
    'Haryana',
    'Delhi',
    'Uttar Pradesh',
    'Chandigarh' // Union Territory
  ];
  const southIndianStates = [
    'Andhra Pradesh',
    'Karnataka',
    'Kerala',
    'Tamil Nadu',
    'Telangana',
    'Puducherry' // Union Territory
  ];
  const eastIndianStates = [
    'Bihar',
    'Jharkhand',
    'Odisha',
    'West Bengal',
    'Sikkim'
  ];
  const westIndianStates = [
    'Goa',
    'Gujarat',
    'Maharashtra',
    'Rajasthan'

  ];
       
  const category=["Fashion","Arts&Crafts","Jewellery"];
const ProductDropdown = () => {
  return (
    <div className='product-dropdown'>
       <h4>Search by States of India</h4>
       <div className="section-states">
        <div className="section1">
          <h5>North India</h5>
          <div className="state-list">
            {northIndianStates.map((state,index)=>(
              <p key={index}>{state}</p>
            ))}
          </div>
        </div>


        <div className="section1">
          <h5>East India</h5>
          <div className="state-list">
            {eastIndianStates.map((state,index)=>(
              <p key={index}>{state}</p>
            ))}
          </div>
        </div>
        <div className="section1">
          <h5>South India</h5>
          <div className="state-list">
            {southIndianStates.map((state,index)=>(
              <p key={index}>{state}</p>
            ))}
          </div>
        </div>
        <div className="section1">
          <h5>West India</h5>
          <div className="state-list">
            {westIndianStates.map((state,index)=>(
              <p key={index}>{state}</p>
            ))}
          </div>
        </div>
        <div className="section1">
          <h5>Category</h5>
          <div className="state-list">
            {category.map((state,index)=>(
              <p key={index}>{state}</p>
            ))}
          </div>
        </div>
       </div>
    </div>
  )
}

export default ProductDropdown