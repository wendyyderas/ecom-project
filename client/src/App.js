import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ProductsPage from './Components/ProductsPage/product';

class App extends Component {

  constructor(){
    super();
    this.state={
      
    }
  }
  render(){
    return (
    <Router>
      <div>
        <Route path="/" Component={ProductsPage}/>
      </div>
    </Router>
    );
  }
};

export default App;
