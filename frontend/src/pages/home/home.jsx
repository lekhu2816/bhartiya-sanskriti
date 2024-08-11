import React from 'react'
import './home.css'
import Footer from '../../component/footer/footer'
import Carousel from '../../component/carousel/carousel'
const Home = () => {
  return (
    <div className='home-page'>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  )
}

export default Home