
const Nisleg = ({ data }) => {
    return (
           <div className="div-box-1">
            {data.map((item, id) => {
                return (<div key={id} className="box">
                    <div className="box-col-0"><img className="box-img" src={item.image} alt="" /></div>
                    <div className="box-col-1">    
                            <h1 className="h1">{item.from}</h1>
                            <h3 className="h5">{item.airport1}</h3>                 
                            <h1 className="h1">{item.to}</h1>
                            <h3 className="h5">{item.airport2}</h3>
                    </div>

                    <div className="box-col-2">
                        <h3 className="h5">{item.dateToTakeOff}</h3>
                        <div className="box-col-2-2">₮{item.price}</div>
                    </div>
                </div>)
            })
            }
            </div>

    )
}
export default Nisleg;