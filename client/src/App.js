import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './index.css';
import product from './Components/Products/Productslist';
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Index from './Components/Home/home';
import Testimony from './Components/Home/Testimony/testimony';


class App extends Component {

  render(){
    return (
    <Router>
    
        <Navbar />
        <Route exact path="/" component={Index}/>
        <Route path="/product" component={product}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/testimony" component={Testimony}/>
        <Footer/>
        

    </Router>
    );
  }
};

export default App;
