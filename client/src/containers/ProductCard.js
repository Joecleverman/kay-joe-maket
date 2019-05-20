import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LikeButton from '../components/LikeButton'
import { likeProduct } from '../actions';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

class ProductCard extends Component {

  handleOnClick = () => {
    this.props.likeProduct(this.props.product)
  }

  render() {

    const { product } = this.props

    return (

      <div className="product-card">
        <div className="container-fluid text-center">
          <h5 className="product-header"><Link key={product.id} to={`/products/${product.id}`}>{product.name}</Link></h5>

          <img src={product.image} width="125" height="100" alt="pic" />
          <br></br>
          <span className="bold-text">Description: </span>{product.description}
          <br></br>
          <br></br>

          <ButtonGroup>
            <Link key={this.props.product.id} to={`/products/${this.props.product.id}`}>
              <Button className="btn btn-sm btn-outline-dark">
                View Detail
              </Button>
            </Link>
            <LikeButton product={this.props.product} likeProduct={this.handleOnClick} />
          </ButtonGroup>

        </div>
      </div>
    )
  }
}

export default connect(null, { likeProduct })(ProductCard);
