import TravelsList from "./travelList";


const ProductList=({products}) =>{
    return (
      <div className="all-list-box3">
        {products.map(product => (
          <TravelsList product={product} />
        ))}
      </div>
    )
  }
  export default ProductList;