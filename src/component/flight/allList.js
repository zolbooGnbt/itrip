import ToggleSwitch from "../toggleSwitch"
import ProductFilters from "./ProductFilters";
import ProductsList from "./flight";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Nisleg from "./nisleg";
import FlightList from "./FlightList";

const CATEGORIES = [
  "Korean Air",
  "MIAT Mongolian Airlines",
  "Turkish Airlines"
]

const AllList = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(true)
  useEffect(() => {
    axios.get('https://react-45bf8-default-rtdb.asia-southeast1.firebasedatabase.app/flight.json').then(response => {
      var x = Object.values(response.data)
      setData(x)
      JSON.parse(localStorage.getItem('flights'))
    }).catch(error => (alert("Error")));;
  }, [])

  const [state, setState] = useState({
    products: data,
    filters: new Set(),
  })

  const handleFilterChange = useCallback(event => {
    setState(previousState => {
      let filters = new Set(previousState.filters)
      let products = data

      if (event.target.checked) {
        filters.add(event.target.value)
      } else {
        filters.delete(event.target.value)
      }
      setChange(false)
      if (filters.size) {
        products = products.filter(product => {
          return filters.has(product.airline)
        })
      }

      return {
        filters,
        products,
      }
    })
  }, [setState, data])


  return (<div className="all-list-container">
    <div className="all-list-box1">
      <div className="price-info">
        <h3 className="price-info1">Үнийн мэдээлэл авах</h3>
        <div className="price-info1">Энэхүү маршрутын үнийн өөрчлөлтийг цаг алдалгүй аваарай</div>
        <div className="price-info2"><ToggleSwitch /> Зөвшөөрөх</div>
      </div>
      <div className="filters">
        <h2 className="filter-box-1"  >Шүүх</h2>

        <ProductFilters
          categories={CATEGORIES}
          onFilterChange={handleFilterChange} />

      </div>
    </div>
    <div className="all-list-box2">
     <ProductsList data={data} products={state.products} />
       
    </div>
  </div>)
}


export default AllList