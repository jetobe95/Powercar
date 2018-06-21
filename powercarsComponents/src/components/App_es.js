import React, { Component } from 'react';
import Header_es from './global/Header_es.js';
import Content_es from './global/Content_es.js';
import Footer_es from './global/Footer_es.js';
import '/home/danielmp96/powercars/src/index_es.css'

class App_es extends Component {
  render(){
    return (
      <div className="Rectangle">
        <Header_es/>
        <Content_es/>
        <Footer_es/>
      </div>
    );
  }
}

export default App_es;
