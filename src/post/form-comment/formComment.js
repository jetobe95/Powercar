import React, { Component } from 'react';
import { Button, Form,  Input ,Col, Row} from 'reactstrap';
import './formComment.css'
class FormComment extends Component {
    state = {  }
    render() {
        return (
            
            <Form 
            onSubmit={this.props.submitButton}
              
             className="Form-Comment">
                    <Row >

                        <Col sm={12}>

                            <Input
                            style={{"borderRadius":20,width:"80%   "}}
                             required
                             onChange={this.props.onChangeInput}
                             className="form-control Form-textArea" 
                             type="text" name="text" 
                             
                             id="exampleText" 
                             placeholder="Write a comment.."/>
                            <Button type="submit" >
                                Comment
                            </Button>
                        </Col>
                        <Col sm={2}>
                        </Col>

                    </Row>
            
            
            </Form>
            
        );
    }
}

export default FormComment;