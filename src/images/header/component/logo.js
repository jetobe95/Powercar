import React, { Component } from 'react';
import logo from './group-5.svg'
import '../container/header.css'
import { Link } from 'react-router-dom';
class Logo extends Component {
    render() {
        return (

            <div>
                <Link to="/">

                    <img
                        className="Group-5 "
                        src={ logo }
                        alt=""
                    />
                </Link>

            </div>
        )
    }
}
export default Logo;
