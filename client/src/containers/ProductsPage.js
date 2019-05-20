import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchProducts } from '../actions';
import ProductsList from '../components/ProductsList'
import ProductShow from './ProductShow';

class ProductsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {

    const { products, match } = this.props

    return (

      <div>
        <Switch>
          <Route exact path={match.url} render={() => (
              <ProductsList products={products} />
            )}/>
          <Route path={`${match.url}/:productId`} component={ProductShow} />
        </Switch>
      </div>
    )
  }
}

export default connect(state => ({ products: state.products }), { fetchProducts })(ProductsContainer);
