import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Logo from '../images/header/component/logo';
import ViewComment from '../comments/viewComment';
import Content_com from '../content/Content_com';
import HeaderTop from '../content/Header_es';
import Home from '../home';
import Header from '../images/header/container/header';
import '../index.css';
import CreatePost from '../post/create-post';
import FormCreatePost from '../post/form-create-post';
import Page404 from '../Page404'



class RouterPage extends Component {
    state = {}

    render() {
        return (
            <Router >
                <div className="Rectangle-header">
                    <Header>
                        <HeaderTop />
                        <CreatePost />
                    </Header>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/create-post" component={ FormCreatePost } />
                        <Route exact path="/viewcomment/:postId" component={ ViewComment } />
                        <Route exact path="/comment" component={ Content_com } />
                        <Route component={ Page404 } /> */
                    </Switch>

                </div>
            </Router>

        );
    }
}



export default RouterPage;







