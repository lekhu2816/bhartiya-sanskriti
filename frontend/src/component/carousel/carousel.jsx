import React, { useState, useEffect } from 'react';
import './carousel.css';
import logo from '../../assets/logo.png'
import box from '../../assets/box.png'

const Carousel = () => {
    const images = [
      "https://www.hatkay.com/cdn/shop/articles/How-to-Look-Stylish-in-Traditional-Indian-Clothing-Where-to-Buy-the-Best-Fashionable-Ethnic-Wear-for-Women-Online.jpg?v=1671543652",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGczTElkTsFnf0lRj8SZVEtiz-1AaB5a9fQ&s",
      "https://www.pratibhasarees.com/cdn/shop/articles/Types_of_Sarees_in_India.jpg?v=1664648179&width=2048",
      "https://www.fashionworldhub.com/wp-content/uploads/2022/11/krithishetty-looks-pretty-in-peach-saree-672x372.jpg"
    ];

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
        <div className="carousel">
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
