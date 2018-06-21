import React, { Component } from 'react';
import './comments.css'
 class Comments extends Component {
     state = {  }
     render() {
         return (
             <div  >
                <hr/>
                {this.props.children} 
            </div>

         );
     }
 }
 
 export default Comments;