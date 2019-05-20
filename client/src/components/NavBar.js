import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ background: 'gray', paddingTop: '12px', paddingBottom: '12px', color: 'black', textDecoration: 'none', textAlign: 'right' }}>

    <NavLink
      to="/"
      style={{padding: '12px', margin: '0 6px 6px', textDecoration: 'none', color: 'black'}}
      >
      <span className="navbar-logo">Kay joe Makèt</span>
    </NavLink>

      <NavLink
        to="/"
        style={link}
        >
        <span className="navbar-link">Home</span>
      </NavLink>
      <NavLink
        to="/products"
        style={link}
        className="navbar-link"
        >
        All Products
      </NavLink>
      <NavLink
        to="/new"
        style={link}
        className="navbar-link"
        >
        Add Product
      </NavLink>
      
    </div>
  )
}

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'white',
}

export default NavBar;
