import Nisleg from "../component/flight/nisleg";

const Flights = ({data}) => {
    return (
        <a href="flight" className="div-box">
            <div className="title">Эрэлттэй нислэг</div>
            <div className="div-box-1">
            <Nisleg data={data}/>
            </div>

        </a>
    )
}
export default Flights;