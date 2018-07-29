import React, { Component } from 'react';
import './create-post.css';
import { Link } from 'react-router-dom';
class CreatePost extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <h1 className="Welcome-to-our-platf ">
                    Welcome to our platform
                 </h1>
                <h1 className="Welcome-to-our-platf text-style-1">
                    Discuss our brand and send your best recommendation!
                 </h1>

                <Link to={ {
                    pathname: "/create-post",
                    state: {

                    }
                } }>
                    {/* <Link to="/create-post"> */ }

                    <button
                        onClick={ this.props.handleMakePost }
                        className="btn btn-success Make-post">
                        Make a post
                    </button>
                </Link>
            </div>

        );
    }
}



export default CreatePost;