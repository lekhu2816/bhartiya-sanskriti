import React, { useState, useEffect } from 'react';
import './carousel.css';
import logo from '../../assets/logo.png'
import box from '../../assets/box.png'
const images = [
  "https://i.ytimg.com/vi/D1FxkgTBPEY/maxresdefault.jpg",
  "https://images.moneycontrol.com/static-mcnews/2024/04/439557308_805594858139017_1079010427320539521_n.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzCH9pX4UjDNcl9V5zx_Vod_BEypF8RKlpg&s",
  "https://st1.latestly.com/wp-content/uploads/2023/11/Rashmika-Mandanna-2-1-380x214.jpg"
  ];
const Carousel = () => {


    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-carousel">
            <button className="left-arrow" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="right-arrow" onClick={nextSlide}>
                &#10095;
            </button>
            <div
                className="carousel-images"
                style={{
                    transform: `translateX(${-currentIndex * 100}%)`
                }}
            >
                {images.map((image, index) => (
                    <div className="carousel-image" key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${
                            index === currentIndex ? 'active' : ''
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
