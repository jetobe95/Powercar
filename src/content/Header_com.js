import React, {Component} from 'react';
import logo from './img/logo.png';
import './css/index_com.css'

class Header_com extends Component {
  render() {
    return (
      <div>
        <header>
          <div class="logo">
            <img src={logo} alt="logo"/>
          </div>
          <div class="login">
            <p>Log In</p>
          </div>
          <div class="rectangle-2">
          </div>
          <div class="register">
            <p>Register</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Header_com;
