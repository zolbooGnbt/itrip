import React from "react"
import { useParams } from "react-router-dom"
import Images from "./image"
import { Calendar, Clock } from "react-bootstrap-icons"

const ProductDetail = ({ dataDest }) => {
    const { id } = useParams()
    const thisProduct = dataDest.find((item)=> item.id.id===id)
    console.log(dataDest)
    return (
        <div key={id} className="detail-container">
            <div className="detail-img">
                <Images thisProduct={thisProduct} />
            </div>
            <div className="detail-box">
                <div className="detail-box-1">
                    <div className="detail-title">{thisProduct.title}</div>
                    <hr  className="hr"/>
                    <div className="detail-1">
                        <div className="detail-1-1"><Calendar className="detail-icon"></Calendar> {thisProduct.date}эхний аялал</div>
                        <div><Clock className="detail-icon"></Clock>{thisProduct.day}</div>
                    </div>
                    <hr className="hr"/>
                    <div className="detail-2">
                        <label className="detail-label">АЯЛЛЫН ТОЙМ ТАЙЛБАР</label>
                        <div>{thisProduct.shortInfo}</div>
                    </div>
                    <hr className="hr"/>
                    <div className="detail-3">
                        <div className="detail-3-2">
                            <label className="detail-label">АЯЛАЛД БАГТСАН ЗҮЙЛС</label>
                            <div className="detail-list">{thisProduct.includedList.map((item)=>{
                                <div key={item.id}>
                                    <li>{item.includedList}</li>
                                </div>
                            })}</div>
                        </div>
                        <div className="detail-3-2">
                            <label className="detail-label">АЯЛАЛД БАГТААГҮЙ ЗҮЙЛС</label>
                            <div className="detail-list">{thisProduct.notIncludedList.map((item)=>{
                                <div key={item.id}>
                                    <li>{item.includedList}</li>
                                </div>
                            })}</div>
                        </div>
                    </div>
                    <hr className="hr"/>
                    <div className="detail-2">
                        <label className="detail-label">САНАМЖ</label>
                        <div>{thisProduct.sanamj}</div>
                    </div>
                </div>
                <div className="detail-box-2">
                    <div className="detail-label-1">Захиалга</div>
          
                    <div className="detail-price">₮{thisProduct.price}</div>
                    <button className="detail-button" >Захиалах</button>
                </div>
            </div>

        </div >
    )
}

export default ProductDetail