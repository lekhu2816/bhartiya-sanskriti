import React, { useContext, useEffect, useRef, useState } from "react";
import "./addProduct.css";
import upload from "../../assets/upload.png";
import axios from 'axios'
const state = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Jammu and Kashmir",
  "Laddakh"
];

const AddProduct = () => {
  // const{ SERVER_URL,admintoken}=useContext(StoreContext)
  const [images, setImages] = useState([]);
  const nameRef = useRef();
  const categoryRef = useRef();
  const stateRef = useRef();
  const descriptionRef = useRef();
  const priceAmountRef = useRef();
  const priceDiscountRef = useRef();
  const productAvailabilityRef = useRef();
  const productQuantityRef = useRef();
  const tagRef = useRef();
  // submit data
  const onSubmitFormhandler =  async(event) => {
    event.preventDefault();
    if(admintoken){
      const formData = new FormData();
      formData.append("name", nameRef.current.value);
      formData.append("category", categoryRef.current.value);
      formData.append("description", descriptionRef.current.value);
      formData.append("state", stateRef.current.value);
      formData.append("price", JSON.stringify({
        amount: priceAmountRef.current.value,
        discount: priceDiscountRef.current.value,
      }));
      images.forEach((image)=>{
        formData.append("images",image)
      })
      formData.append("stock",JSON.stringify({
        availability:productAvailabilityRef.current.value,
        quantity:productQuantityRef.current.value 

      }))
      formData.append("tags",tagRef.current.value);
      const url=`${ SERVER_URL}/api/product/add-product`
      const response =await axios.post(url,formData,{headers:{admintoken:admintoken}});
      if(response.data.success){
        alert(response.data.message)
        nameRef.current.value="";
        descriptionRef.current.value="";
        priceAmountRef.current.value="";
        priceDiscountRef.current.value="";
        productQuantityRef.current.value="";
        tagRef.current.value="";
        setImages([]);
      }
      else{
        alert(response.data.message)
      }
   }
   else{
     alert("Please login")
   }
   


  };
  // image handler
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }
  };

  return (
    <div className="add-products">
  
     
        <form onSubmit={onSubmitFormhandler} className="add-product-item">
          <div className="product-item-top">
            <div className="product-desc-left">
              <div className="productName product-flex">
                <p>Name</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Product Name"
                  ref={nameRef}
                  required
                />
              </div>
              <div className="productCategory">
                <p>Category</p>
                <select name="" id="" ref={categoryRef}>
                  <option value="Fashion">Fashion</option>
                  <option value="Jewellery">Jewellery</option>
                  <option value="Handloom">Handloom</option>
                  <option value="Art&Craft">Art&Craft</option>
                </select>
              </div>
              <div className="productState">
                <p>State</p>
                <select name="" id="" ref={stateRef}>
                  {state.map((currState, index) => (
                    <option value={currState} key={index}>
                      {currState}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="product-desc-right">
              <div className="productDescription">
                <textarea
                  name=""
                  id=""
                  rows={8}
                  cols={40}
                  placeholder="Enter the Description"
                 ref={descriptionRef}
                 required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="product-price">
            <div className="price-amount product-flex">
              <p>Amount</p>
              <input type="number" placeholder="Enter amount" ref={priceAmountRef} required/>
            </div>
            <div className="price-discount product-flex ">
              <p>Discount</p>
              <input type="number" placeholder="Enter discount" ref={priceDiscountRef} required />
            </div>
          </div>
          <div className="product-stock">
            <div className="stock-availability product-flex">
              <p>Availability</p>
              <select name="" id="" ref={productAvailabilityRef}>
                <option value="In stock">In stock</option>
                <option value="Out of stock">Out of stock</option>
              </select>
            </div>
            <div className="product-quantity product-flex">
              <p>Quantity</p>
              <input type="number" placeholder="Enter quantity" ref={productQuantityRef} required />
            </div>
          </div>
          <div className="product-tag product-flex">
            <p>Tags</p>
            <input type="text" placeholder="Enter the tags" ref={tagRef}/>
          </div>
          <div className="product-images">
            <p>Upload files</p>
            {[0, 1, 2, 3].map((index) => (
              <div className="product-upload-image" key={index}>
                <label htmlFor={`uploadImage${index}`}>
                  {" "}
                  <img
                    src={
                      images[index]
                        ? URL.createObjectURL(images[index])
                        : upload
                    }
                    alt=""
                  />
                </label>
                <input
                  onChange={(e) => {
                    handleImageChange(e, index);
                  }}
                  type="file"
                  accept="image/*"
                  id={`uploadImage${index}`}
                  hidden
                />
              </div>
            ))}
          </div>
          <div className="product-info-submit-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      
    </div>
  );
};

export default AddProduct;
