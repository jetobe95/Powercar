import React, { Component } from 'react';
import { Collapse,Button,Card,CardBody } from "reactstrap";
import FormComment from './form-comment/formComment';
class CollapseComment extends Component {
    state = {  
        collapse: false, status: 'Closed' 
    }
    
  toggle=()=> {
    this.setState({ collapse: !this.state.collapse });
  }
    render() {
        return (
            <div>
        
       
        <Collapse
           isOpen={this.props.collapse}
        
        >
          <Card>
            <CardBody>
            <FormComment/>
              
            </CardBody>
          </Card>
        </Collapse>
      </div>
            
        );
    }
}

export default CollapseComment;