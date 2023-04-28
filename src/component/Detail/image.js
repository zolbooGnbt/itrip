import { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";


const Images = ({thisProduct}) => {
    const SliderDatas = [
        { image: thisProduct.img1},
        { image: thisProduct.img2 },
        { image: thisProduct.img3 },
        { image: thisProduct.img4 }
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
        <div className='image-slide'>       
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
        <button onClick={prevSlide} className="arrow-left" ><ArrowLeftCircle ></ArrowLeftCircle></button>
        <button onClick={nextSlide} className="arrow-right"><ArrowRightCircle></ArrowRightCircle></button>
        </div>

    )
}
export default Images;