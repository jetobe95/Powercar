import React from 'react';
import { Row, Col, } from 'reactstrap';
import log from '../logo.svg'
import './comment.css'
import timeAgoCal from '../timeAgo/time-ago-calc'

const postComment = () => {

}
const Comment = (props) => (
  <div  >
    <div >

      <Row>
        {/* <Col sm="1"  className="ml-0 p-0" > */}

          <img
            className="Photo"
            src={ props.foto }
            alt=""
          />

        {/* </Col> */}

        <Col sm="2" className="ml-0 p-0 Comment-Info">
          <h3 className="Name">
            { props.Name }

          </h3>
          <h3 className="-hrs-ago ">
            { timeAgoCal(props.creacion )}

          </h3>


          

        </Col>

      </Row>
    </div>
    <Row className="Description-Comment">
      <Col sm="6"  >
        <p
        className="Description-Comment"
        >
          { props.Description }
        </p>

      </Col>


    </Row>



  </div>
)
export default Comment;