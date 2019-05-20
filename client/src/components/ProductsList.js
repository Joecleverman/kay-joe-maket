import React from 'react';
import ProductCard from '../containers/ProductCard';
import PriceFilter from './PriceFilter';

class ProductsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      priceFilter: 'All',
      sortedDesc: true // initial state for like sort order
    }
  }

  renderProducts = (products) => {
    const defaultSort = this.state.sortedDesc
    // if defaultSort = true, display highest to lowest; else display lowest to highest
    products.sort(function(a,b) {
      if (defaultSort) {
      return b.likes - a.likes
    } else {
      return a.likes - b.likes
    }
  })
    return products.map(product => <ProductCard key={product.id} product={product} />)
  }

  productFilter = () => {
    let filteredList = ""
    if (this.state.priceFilter === 'All') {
      filteredList = this.props.products
    } else {
      filteredList = this.props.products.filter(product => this.state.priceFilter === product.price_range);
    }
    return filteredList
  }

  handleFilterChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

// update state to inverse of previous state
  handleSort = ()  => {
    this.setState({
      sortedDesc: !this.state.sortedDesc
    })
  }

  render(){
    return (
      <div className="products-index">
         <PriceFilter handleChange={this.handleFilterChange} />
   
          <div className="container-fluid">
            <div className="row">
            <br />
              {this.renderProducts(this.productFilter())}
          </div>
        </div>
      </div>
    )
  }
}

export default ProductsList
