import React, { Component } from 'react';
import logo from './img/logo.png';
import Logo from '../images/header/component/logo';


class HeaderTop extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">
         <Logo/>
        </div>
        <ul className="form-inline">
          <li className="navbar-nav">
            
              <button className="btn btn-light" type="button">Log in</button>
          </li>
          <li className="navbar-nav">
            
        <button className="btn btn-success" type="button">Register</button>
             
          </li>
        </ul>






      </div>
    );
  }
}

export default HeaderTop;
