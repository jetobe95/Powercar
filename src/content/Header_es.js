import React, {Component} from 'react';
import logo from './img/logo.png';
import Logo from '../images/header/component/logo';


class HeaderTop extends Component {
  render() {
    return (
      <div>
        <header>
        <br></br>
        <div className="container">
          <div className="row align-items-center">
              <Logo/>
            {/* <div className="col">
            </div> */}
            <div className="col-8">
            </div>
            <div className="col">
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

export default HeaderTop;
