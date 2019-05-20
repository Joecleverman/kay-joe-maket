import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../actions';
import { FormControl, FormGroup } from 'react-bootstrap';

class ProductNew extends Component {

  constructor() {
    super();

    this.state = {
      name: '' ,
      description: '',
      price_range: '',
      category: '',
      image: ''
    };
  }

  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createProduct(this.state)
    this.props.history.push('/products')
  }

  render(){
    return (
      <div className="product-form">
        <h5>Add Product</h5>
        <form onSubmit={this.handleOnSubmit} >

          <FormGroup>

            <label>Product Name:</label>
            <FormControl
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Description:</label>
            <FormControl
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Price Range:</label>
            <FormControl
              componentClass="select"
              placeholder="select"
              name="price_range"
              value={this.state.price_range}
              onChange={this.handleOnChange}
              >
              <option value="select">select</option>
              <option value="Inexpensive">Inexpensive</option>
              <option value="Pricey">Expensive</option>
            </FormControl>
            <br></br>

            <label>Category:</label>
            <FormControl
              className="form-control"
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleOnChange}
            />
            <br></br>

            <label>Image URL:</label>
            <FormControl
              className="form-control"
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleOnChange}
            />
            <br></br>

            <button className="btn btn-sm btn-dark" type="submit">Submit</button>

          </FormGroup>

        </form>
      </div>
    );
  }
}

export default connect(null, { createProduct })(ProductNew)
