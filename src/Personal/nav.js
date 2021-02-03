import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import HomePage from './home';
import About from './about';


class Nav extends Component {
  render() {
     
    return (

          <Router>
            <div class="navbar-nav ml-auto">
              <ul>
                <li className="nav-item nav-link active"  >
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item nav-link active"  >
                  <Link to="/about">About</Link>
                </li>
              </ul>

              <hr />

              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={About} />

            </div>
          </Router>
    );
  }
}
export default Nav;


