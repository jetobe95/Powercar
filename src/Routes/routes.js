import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom'

import Home from '../home';
import '../index.css'
import Header from '../images/header/container/header';
import Logo from '../images/header/component/logo';
import ViewComment from '../comments/viewComment';
import Content_com from '../content/Content_com';
  

class RouterPage extends Component {
    state = {  }
    
    render() {
        return (
            <Router >
                <div className="Rectangle-header">
                        <Header>
                            <Logo />

                        </Header>
                    
                  
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/viewcomment/:postId" component={ViewComment}/>
                    <Route exact path="/comment" component={Content_com}/>


                </div>

            </Router>

            
        );
    }
}

export default RouterPage;