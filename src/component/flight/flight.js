import FlightList from "./FlightList"


const ProductsList=({products}) =>{
    return (
      <ul className="products">
        {products.map(product => (
          <FlightList product={product} />
        ))}
      </ul>
    )
  }
  export default ProductsList;