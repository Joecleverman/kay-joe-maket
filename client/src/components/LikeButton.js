import React from 'react';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

class LikeButton extends React.Component {

  render() {
    return (
      <div>
        <Button
          className="btn btn-sm btn-outline-dark"
          onClick={this.props.likeProduct}>
          &#128077; Like
          <Badge>{this.props.product.likes}</Badge>
        </Button>
      </div>
    )
  }
}

export default LikeButton;
