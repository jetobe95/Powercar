import React, { Component } from 'react';
import { Button, Form,  Input ,Col, Row} from 'reactstrap';
import './formComment.css'
class FormComment extends Component {
    state = {  }
    render() {
        return (
            <Form onSubmit={this.props.submitButton} className="Form-Comment">
                    <Row>

                        <Col sm={10}>

                            <Input
                            required
                             onChange={this.props.onChangeInput}
                             className="Form-textArea" 
                             type="text" name="text" 
                             
                             id="exampleText" 
                             placeholder="Write a comment.."/>
                        </Col>
                        <Col sm={2}>
                        <Button type="submit" >
                            Comment
                        </Button>
                        </Col>

                    </Row>
            
            
            </Form>
            
        );
    }
}

export default FormComment;