import { useState } from "react";
import axios from "axios"

function AddFlight() {
    const [image, setImage] = useState("");
    const [logo, setLogo] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [airport1, setAirport1] = useState("")
    const [airport2, setAirport2] = useState("")
    const [airline, setAirline] = useState("")
    const [timeToTekeOff, setTimeToTekeOff] = useState("")
    const [dateToTakeOff, setDateToTakeOff] = useState("")
    const [landingTime, setLandingTime] = useState("")
    const [landingDate, setLandingDate] = useState("")
    const [flightNumber, setFlightNumber] = useState("")
    const [price, setPrice] = useState("")
    const [flightTime, setFlightTime] = useState("")


    function addHandler() {
        var flight = {
            image: image,
            airline: airline,
            logo: logo,
            from: from,
            to: to,
            airport1: airport1,
            airport2: airport2,
            timeToTekeOff: timeToTekeOff,
            dateToTakeOff: dateToTakeOff,
            landingDate: landingDate,
            landingTime: landingTime,
            flightNumber: flightNumber,
            price: price,
            flightTime: flightTime
        }
        axios.post('https://react-45bf8-default-rtdb.asia-southeast1.firebasedatabase.app/flight.json', flight)
            .then(response => {
                alert("amjilttai nemegdlee")
            }
            ).catch(error => alert("error"))
    }

    return (
        <div className="add-info">
            <div className="add-0">
                <input type="text" alt="" className="add-image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="image URL" />
                <input type="file" alt="" className="add-image" value={logo} onChange={(e) => setLogo(e.target.value)} placeholder="airline logo" />
                <input type="text" className="add-image" placeholder="Airline" value={airline} onChange={(e) => setAirline(e.target.value)} />
                <input type="text" className="add-image" placeholder="Flight Number" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} />
            </div>
            <div className="add-1">
                <div className="add-product">
                    <label> Хаанаас</label>
                    <input type="text" className="add-input" placeholder="Хаанаас" value={from} onChange={(e) => setFrom(e.target.value)} />
                    <input type="text" className="add-input" placeholder="Хөөрөх нисэх буудал" value={airport1} onChange={(e) => setAirport1(e.target.value)} />
                    <input type="time" className="add-input" placeholder="Хөөрөх цаг" value={timeToTekeOff} onChange={(e) => setTimeToTekeOff(e.target.value)} />
                    <input type="date" className="add-input" placeholder="Хөөрөх өдөр" value={dateToTakeOff} onChange={(e) => setDateToTakeOff(e.target.value)} />
                </div>
                <div className="add-product">
                    <label> Хүрэх газар</label>
                    <input type="text" className="add-input" placeholder="Хүрэх газар" value={to} onChange={(e) => setTo(e.target.value)} />
                    <input type="text" className="add-input" placeholder="Буух нисэх буудал" value={airport2} onChange={(e) => setAirport2(e.target.value)} />
                    <input type="time" className="add-input" placeholder="Газардах цаг" value={landingTime} onChange={(e) => setLandingTime(e.target.value)} />
                    <input type="date" className="add-input" placeholder="Газардах өдөр" value={landingDate} onChange={(e) => setLandingDate(e.target.value)} />

                </div>
            </div>
            <div className="add-0">
                <input type="text" className="add-input" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" className="add-input" placeholder="Нислэг үргэлжлэх хугацаа" value={flightTime} onChange={(e) => setFlightTime(e.target.value)} />
            </div>
            <button onClick={addHandler} className="add-btn">Add</button>
        </div>
    )

}
export default AddFlight;