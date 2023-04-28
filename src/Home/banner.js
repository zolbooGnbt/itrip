import banner1 from "../image/banner1.webp"
import banner2 from "../image/banner2.webp"
import banner3 from "../image/banner3.webp"
import React, { useEffect, useState } from "react"




const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderData = [{image:banner1}, {image:banner2},{image:banner3}];
    const slideLength = sliderData.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      console.log("next");
    };
  
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide,autoScroll,slideInterval]);
  
    return (
      <div className="slider">
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt="slide" className="image" />
                </div>
              )}
            </div>
          );
        })}

      </div>
    );
  };
  
  export default Banner;