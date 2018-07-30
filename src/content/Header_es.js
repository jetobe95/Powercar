import React, { Component } from 'react';
import logo from './img/logo.png';
import Logo from '../images/header/component/logo';
import { Link } from 'react-router-dom';


class HeaderTop extends Component {
  render() {
    return (
      <div className="navbar bg-light">
        <div className="navbar-brand">
         <Logo/>
        </div>
        <ul className="form-inline">
          <li className="navbar-nav">
              
              <button onClick={this.props.handleClickLogin} className="btn btn-light" type="button">Log in</button>
          </li>
          <li className="navbar-nav">
          <Link to={"/register"}>
        <button className="btn btn-success" type="button">Register</button>
              </Link>
             
          </li>
        </ul>






      </div>
    );
  }
}

export default HeaderTop;
