import { Link } from "react-router-dom";

const Aylal = ({ dataDest }) => {
    
     const products=  dataDest.map((item, id) => {
                return (<div key={id} className="box">
                    <div className="box-col-0"><img className="box-img" src={item.img1} alt="" /></div>
                    <div className="box-col-1">
                        <h1 className="h1">
                            <Link to={`/travel/${item.id}`}>{item.title}</Link>
                        </h1>
                    </div>
                    <div className="box-col-2-1">
                        <h3 className="h5">{item.date}</h3>
                        <div className="box-col-2-2">₮{item.price}</div>
                    </div>
                </div>)
            })
    return (
        <div className="div-box-1">
          {products}
        </div>
      );
}
export default Aylal;