import React from 'react';

const PriceFilter = (props) => {

  return (
    <div className="filter">
      <span className="filter-label bold-text">Find Products by Price Range:</span>

      <span className="filter-label"><label htmlFor='all'>All:</label>
      <input type="radio" name='priceFilter' id='all' value='All' onChange={props.handleChange} /></span>

      <span className="filter-label"><label htmlFor='inexpensive'> Inexpensive:</label>
      <input type="radio" name='priceFilter' id='inexpensive' value='Inexpensive' onChange={props.handleChange} /></span>

      <span className="filter-label"><label htmlFor='pricey'> Expensive:</label>
      <input type="radio" name='priceFilter' id='pricey' value='Pricey' onChange={props.handleChange} /></span>
    </div>
  )
}

export default PriceFilter;
