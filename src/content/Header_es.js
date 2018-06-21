import React, {Component} from 'react';
import logo from './img/logo.png';


class Header_es extends Component {
  render() {
    return (
      <div>
        <header>
        <br></br>
        <div class="container">
          <div class="row align-items-center">
            <div class="col">
              <img src={logo} alt="logo"/>
            </div>
            <div class="col-8">
            </div>
            <div class="col">
              <button className="btn btn-light" type="button">Log in</button>
              <button className="btn btn-success" type="button">Register</button>
            </div>
          </div>
        </div>
        </header>
      </div>
    );
  }
}

export default Header_es;
