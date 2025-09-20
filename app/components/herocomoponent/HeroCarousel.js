"use client"
import Slider from "react-slick";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HeroCarousel.module.css"

export default function HeroCarousel() {
  const [slides, setSlides] = useState([]);

  // Fetching the slide data (you can replace this with your API or static data)
  useEffect(() => {
    const fetchSlides = async () => {
      const response = await fetch("/api/heroCarousel");
      const data = await response.json();
      if (data?.slides) {
        setSlides(data.slides);
      }
    };

    fetchSlides();
  }, []);

  const settings = {
    dots: true,           
    infinite: false,       
    speed: 500,           
    slidesToShow: 1,     
    slidesToScroll: 1,    
    autoplay: false,       
    autoplaySpeed: 3000,  
    pauseOnHover: true,   
    arrows: true,  
  };

  return (
    <div className={`${styles["hero-carousel"]} w-full relative overflow-hidden`}>
      <Slider {...settings}>
        {slides.length > 0 ? (
          slides.map((slide) => (
            <div key={slide._id} className={`${styles["hero-slide"]}`}>
              <div
                className={`${styles["slide-content"]}`}
                style={{
                  backgroundImage: slide.backgroundImage
                    ? `url(${slide.backgroundImage})`
                    : "none",
                  backgroundColor: slide.backgroundColor || "transparent",
                  textAlign: slide.textAlign || "center",
                }}
              >
                <div className="max-w-7xl mx-auto md:px-6">
                        <h1>{slide.title}</h1>
                        <p>{slide.description}</p>
                        {slide.ctaText && slide.ctaLink && (
                        <a href={slide.ctaLink} className="cta-btn">
                            {slide.ctaText}
                        </a>
                        )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Slider>
    </div>
  );
}
