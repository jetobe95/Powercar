import React, { Component } from 'react';
import Header_com from './Header_com.js';
import Content_com from './Content_com.js';
import Footer_com from './Footer_com.js';
import './css/index_com.css'


class App_com extends Component {
  render(){
    return (
      <div className="powercar-comment">
        <Header_com/>
        <Content_com/>
        <Footer_com/>
      </div>
    );
  }
}

export default App_com;
