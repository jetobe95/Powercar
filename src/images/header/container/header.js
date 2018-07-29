import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div className="">
            {this.props.children}
    
          </div>
        )
    }
}
export default Header;