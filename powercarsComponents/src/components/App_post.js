import React, { Component } from 'react';
import Header_es from './global/Header_es.js';
import Content_post from './global/Content_post.js';
import Footer_es from './global/Footer_es.js';
import '/home/danielmp96/powercars/src/index_com.css'

class App_post extends Component {
  render(){
    return (
      <div className="powercar-comment">
        <Header_es/>
        <Content_post/>
        <Footer_es/>
      </div>
    );
  }
}

export default App_post;
