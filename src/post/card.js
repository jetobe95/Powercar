import React, { Component } from 'react';
import log from '../logo.svg'
import './card.css'
import { Row, Col,Button,  } from 'reactstrap';
import {
 Link
} from 'react-router-dom'

class CardPost extends Component{
  state={
    collapse:false,
    hidden:(this.props.hidden),
  }

  
  ButtonClick=()=>{
  
    this.setState({
      collapse:!this.state.collapse,
  })

}
render(){
  return (
    <div
     className="Top"
     >
        <Row>
        <Col sm="1" style={{"maxWidth": "4.333333%"}}>

          <img 
          className="Path" 
           src={this.props.src} 
           alt=""
           />
        
        </Col>
        
        <Col sm="2">
              <h3 
              className="Name">
              
              {this.props.title}
              
              </h3>
              <h3 
              className="-hrs-ago">
              
              {this.props.time}
              
              </h3>
        
        </Col>

        </Row>
          <Row>
          <Col sm="6">
          <p 
          className="Description">
          {this.props.Description}
          </p>

          </Col>
          <Col  sm="6">
         
         <Link to={`/${this.props.Name}`}>
          <Button 
            hidden={this.state.hidden}
            className="Button-comment"
            onClick={this.ButtonClick}
            color="success">
          Comentar
          </Button>{' '}
         </Link>
          
         
                  
          </Col>
          {/* <CollapseComment
          collapse={this.state.collapse}
          /> */}
          </Row>

      
    
    </div>
    
  );
};

}
  

export default CardPost;
