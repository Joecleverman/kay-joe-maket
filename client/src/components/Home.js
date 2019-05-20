import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {

  return (
    <div className="home">
      <div className="welcome">
      <span className="welcome-text"><h1>Welcome to Kay joe Makèt</h1></span>
        <h2>We didn’t create a company, we have created a place for you.</h2>
        
        <Link to="/products">
            <Button className="btn btn-md btn-primary">
              View Products
            </Button>
         </Link>
      </div>
    </div>
  );
}

export default Home;
