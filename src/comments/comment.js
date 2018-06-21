import React from 'react';
import { Row, Col, } from 'reactstrap';
import log from '../logo.svg'
// import './comment.css'

const postComment=()=>{

}
const Comment = (props) => (
  <div>
    <div className="">

    <Row>
      <Col sm="1">

        <img
          className="Path"
          src={ log }
          alt=""
        />

      </Col>

      <Col sm="2">
        <h3
          className="Name">


          { props.Name }

        </h3>
        <h3
          className="-hrs-ago">

          { props.time }

        </h3>

      </Col>

    </Row>
    </div>
    <Row>
      <Col sm="6">
        <p
          >
          { props.Description }
        </p>

      </Col>
      
      
    </Row>



  </div>
)
export default Comment;