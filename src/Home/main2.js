import img1 from "../image/athene.webp"
import img2 from "../image/santorini.jpeg"
import img3 from "../image/greek.jpeg"
import Special from "./special"

import { useState } from "react";


const Main2 = () => {
    const SliderDatas = [
        { image: img1},
        { image: img2 },
        { image: img3 }
    ]

    const [current, setCurrent] = useState(0);
    const length = SliderDatas.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(SliderDatas) || SliderDatas.length <= 0) {
        return null;
    }
    return (
        <div className='slider'>
          
            {SliderDatas.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.image} alt='slides' className='banner1' />
                        )}
                    </div>
                    
                );
            })}
        <button onClick={prevSlide} className="left"> </button>
        <button onClick={nextSlide}className="right" ></button>
        <Special/>
        </div>

    )
}
export default Main2;