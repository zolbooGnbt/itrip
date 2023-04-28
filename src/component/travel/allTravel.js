import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import TravelFilters from "./TravelFilters";
import ProductList from "./travel";
import Aylal from "./aylal";




const CATEGORIES = [
  "Indonesia",
  "China",
]

const AllTravel = () => {
  const [dataDest, setDataDest] = useState([]);
  const [change, setChange] = useState(true)
  useEffect(() => {
    axios.get('https://react-45bf8-default-rtdb.asia-southeast1.firebasedatabase.app/destination.json').then(response => {
      var x = Object.values(response.data)
      setDataDest(x)
      JSON.parse(localStorage.getItem('flights'))
    }).catch(error => (alert("Error")));;
  }, [])

  const [state, setState] = useState({
    products: dataDest,
    filters: new Set(),
  })

  const handleFilterChange = useCallback(event => {
    setState(previousState => {
      let filters = new Set(previousState.filters)
      let products = dataDest

      if (event.target.checked) {
        filters.add(event.target.value)
      } else {
        filters.delete(event.target.value)
      }

      if (filters.size) {
        products = products.filter(product => {
          return filters.has(product.location)
        })
      }
      setChange(false)
      return {
        filters,
        products,
      }
    })
  }, [setState, dataDest])


  return (<div className="all-list-container">
    <div className="all-list-box1">
      <div className="filters">
        <h2 className="filter-box-1"  >Шүүх</h2>

        <TravelFilters
          categories={CATEGORIES}
          onFilterChange={handleFilterChange} />

      </div>
    </div>
    <div >
      {!change ? (<ProductList dataDest={dataDest} products={state.products} />)
        : (
          <div className="all-list-box3"><Aylal dataDest={dataDest} />
          </div>)}

    </div>
  </div>)
}


export default AllTravel