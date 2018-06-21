import React, { Component } from 'react';
import Header_com from './global/Header_com.js';
import Content_com from './global/Content_com.js';
import Footer_com from './global/Footer_com.js';
import '/home/danielmp96/powercars/src/index_com.css'

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
