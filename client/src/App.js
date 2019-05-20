import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductNew from './containers/ProductNew';
import ProductShow from './containers/ProductShow';
import ProductsPage from './containers/ProductsPage';
import './App.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/new" component={ProductNew} />
              <Route exact path="/products" component={ProductsPage} />
              <Route path="/products/:productId" component={ProductShow} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
