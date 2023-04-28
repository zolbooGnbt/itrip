import { Link } from "react-router-dom";

const TravelsList = ({ product }) => {

    return (<div key={product.id} className="box">
        <div className="box-col-0"><img className="box-img" src={product.img1} alt="" /></div>
        <div className="box-col-1">
        <Link to={`/travel/${product.id}`}><h1 className="h1">{product.title}</h1></Link>
        </div>
        <div className="box-col-2">
            <h3 className="h5">{product.date}</h3>
            <div className="box-col-2-2">₮{product.price}</div>
        </div>
    </div>)
}
export default TravelsList;