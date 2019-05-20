import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from './reducers';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk)),
);


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

