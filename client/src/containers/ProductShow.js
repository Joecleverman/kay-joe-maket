import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions';
import { fetchComments } from '../actions';
import { deleteProduct } from '../actions';
import { likeProduct } from '../actions';
import CommentsList from '../components/CommentsList';
import CommentNew from '../components/CommentNew';
import LikeButton from '../components/LikeButton'
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

class ProductShow extends React.Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
    this.props.fetchComments(this.props.match.params.productId);
  }

  handleOnClick = () => {
    this.props.likeProduct(this.props.product)
  }

  render() {
    const { product, comments, deleteProduct, history } = this.props;

    return (
      <div className="product-show">
        <div className="container-fluid">
          <h3 className="product-header">{product.name}</h3>
            <div className="product-body">
            <img src={product.image} width="100%" height="75%" alt="pic" />
            <br></br>
            <span className="bold-text">Description: </span>{product.description}
            <br></br>
            <span className="bold-text">Price: </span>{product.price_range}
            <br></br>
            <span className="bold-text">Category: </span>{product.category}
          </div>

          <div className="product-buttons">
            <ButtonGroup>
              <Button
                className="btn btn-sm btn-outline-dark"
                onClick={() => deleteProduct(product.id, history)}
                >
                Delete
              </Button>

              <LikeButton product={product} likeProduct={this.handleOnClick} />
            </ButtonGroup>
          </div>


          <CommentsList comments={comments} />
          <CommentNew productId={this.props.match.params.productId} />

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const product = state.products.find(product =>product.id === parseInt(ownProps.match.params.productId, 10)) || {}
  return ({
    product: product,
    comments: state.comments
  })
}

export default connect(mapStateToProps, { fetchComments, fetchProduct, deleteProduct, likeProduct })(ProductShow);
