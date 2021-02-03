import React, { Component } from 'react';
import {Switch, Route } from "react-router-dom";
import './Personal/bootstrap.min.css';

import './Personal/style.css';
import NavBar from './Personal/personal';
import Footer from './Personal/footer';
import HomePage from './Personal/home';
import About from './Personal/about';
//import Hero from './Personal/hero-section';
//import Nav from './Personal/nav';
import Pricing from './Personal/pricing';


class App extends Component {
  render() {
     
    return (
        <div>  
          <NavBar/>
          <Switch>
            <div>
              <Route exact path="/" component={HomePage} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/about" component={About} />
            </div>
          </Switch>
          <Footer/>       
        </div>  
    );
  }
}
export default App;
