import React, { Component } from 'react';
import { Button, Form,  Input ,Col, Row} from 'reactstrap';
import './formComment.css'
class FormComment extends Component {
    state = {  }
    render() {
        return (
            <Form onSubmit={this.props.submitButton}>
                    <Row>

                        <Col sm={10}>
                            <Input
                             onChange={this.props.onChangeInput}
                             className="Form-textArea" 
                             type="textarea" name="text" id="exampleText" placeholder="Write a comment.."/>
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