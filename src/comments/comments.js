import React, { Component } from 'react';
import './comments.css'
 class Comments extends Component {
     state = {  }
     render() {
         return (
             //TODO:container fluid 
             <div className="container" > 
             <div className="row">

                {this.props.children} 
             </div>
                {/* <hr/> */}
            </div>

         );
     }
 }
 
 export default Comments;