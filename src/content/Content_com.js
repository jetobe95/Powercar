import React, {Component} from 'react';
import './css/index_com.css'
import background from './img/backgroundscopy.png'
import searchbox from './img/searchbox.png'
import bitmap from './img/bitmap.png'
import searchlook from './img/searchlook.png'
import { Button } from 'reactstrap';


class Content_com extends Component {
  submitForm=(event)=>{
    
    console.log('====================================');
    console.log(event.target);
    console.log('====================================');
    event.preventDefault();
  }
  render() {
    return (
     
      <div>
        <div className="content_com">
          <div className="welcome">
            <p>Welcome to our platform</p>
          </div>
          <div className="discuss">
            <p>Discuss our brand and send your best recommendation!</p>
          </div>
          <div className="backgroundscopy">
            <img src={background} alt="background"/>
            <img className="bitmap" src={bitmap} alt="bitmap"/>
            <form onSubmit={this.submitForm}>
            <input ref="name" className="nickname" onClick></input>
            <input className="title">
            </input>
            <input className="comment">
            </input>
            <Button type="submit" > Publish</Button>
            </form>
          </div>
          <div className="searchbox">
            <img src={searchbox} alt="searchbox"/>
          </div>
          <div className="searchlook">
            <img src={searchlook} alt="searchlook"/>
          </div>
          <div className="filter">
            <p>Filter</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content_com;
