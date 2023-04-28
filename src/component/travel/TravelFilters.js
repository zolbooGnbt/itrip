function TravelFilters(props) {
    const { 
      categories,
      onFilterChange,
    } = props
    
    return (
        <div className="filter-box-2" >
          {categories.map(category => (
            <div key={category}>
              <label>
                <input 
                  onChange={onFilterChange}
                  type="checkbox"
                  value={category} 
                  className="checkbox"/>
                {category}
              </label>
            </div>
          ))}
     
      </div>
    )
  }
  export default TravelFilters