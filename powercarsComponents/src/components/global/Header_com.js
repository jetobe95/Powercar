import React, {Component} from 'react';
import logo from './img/logo.png';
import '/home/danielmp96/powercars/src/index_com.css'
import rectangle2 from './img/rectangle2.png';

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
          <div class="rectangle2">
            <img src={rectangle2} alt="rectangle2"/>
          </div>
          <div class="register">
            <p>Register</p>
          </div>
          <div class="welcome">
            <p>Welcome to our platform</p>
          </div>
          <div class="discuss">
            <p>Discuss our brand and send your best recommendation!</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Header_com;
