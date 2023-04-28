import img from "./a.png"

const FlightList = ({ product ,addHandler,products }) => {

    return (<div key={product.id} className="box-1">
        <div className="box-1-1">
            <div className="box-1-1-1">
                <div className="box-logo">
                    <img className="logo-img" src={product.logo} alt="logo" />
                    <h1 >{product.airline}</h1>
                </div>
                <h1 >{product.flightNumber}</h1>
            </div>
            <div className="box-1-1-2">
                <div className="box-1-1-2-1">
                    <div className="box-label-1" ><b>{product.from}</b></div>
                    <div className="box-label">{product.airport1}</div>
                </div>
                <div className="box-1-1-2-2">
                    <div className="box-label-1"><b>{product.to}</b></div>
                    <div className="box-label">{product.airport2}</div>
                </div>
            </div>
            <div className="box-1-1-3">
                <div className="box-1-1-3-1">
                    <div className="box-label">Хөөрөх цаг</div>
                    <div className="box-label">{product.dateToTakeOff}</div>
                    <div className="box-label-1">{product.timeToTekeOff}</div>
                </div>
                <div className="box-1-3">
                    <img src={img} className="img-label" alt=" "></img>
                    <div className="box-1-1-3-1-1">
                        <div className="box-label">Нислэг үргэлжлэх хугацаа</div>
                        <div className="box-label">{product.flightTime}</div>
                    </div>
                </div>
                <div className="box-1-1-3-2">
                    <div className="box-label">Газардах цаг</div>
                    <div className="box-label">{product.landingDate}</div>
                    <div className="box-label-1">{product.landingTime}</div>
                </div>
            </div>
        </div>
        <div className="box-1-2">
            <h3 className="box-1-2-0">{product.dateToTakeOff}</h3>
            <div className="box-1-2-1">₮{product.price}</div>
            <button className="button-3" onClick={()=>addHandler(products)}> Сонгох</button>
        </div>

    </div>)
}
export default FlightList;