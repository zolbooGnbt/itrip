import img1 from "../image/phonebanner.webp"
import img2 from "../image/dinozawar.webp"
// import img3 from "../image/google-play-badge-logo.svg"
import img4 from "../image/Unknown.png"


const Main4=()=>{
    return(
        <div className="main4-box">
            <img src={img1} className="main4-img1" alt="img1"/>
            <img src={img2} className="main4-img2"alt="img1"/>
            {/* <img src={img3} className="main3-img3"/> */}
            <img src={img4} className="main4-img4" alt="img1"/> 
            <div className="main4-text">iTrip аппликейшнийг утсандаа суулган хямд үнийн саналуудыг цаг алдалгүй авч, захиалгаа хамгийн хялбараар хийгээрэй.</div>
        </div>
    )
}
export default Main4;