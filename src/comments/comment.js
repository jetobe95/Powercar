import React from 'react';
import { Row, Col, } from 'reactstrap';
import log from '../logo.svg'
import './comment.css'
import timeAgoCal from '../timeAgo/time-ago-calc'
import PhotoNameTime from './../post/components/foto-name-time';

const postComment = () => {

}
const Comment = (props) => (
  <div  >


    <div className="row">
      <div className="container">
        <div className="row">
          <PhotoNameTime {...props}/>
        </div>
      </div>

    </div>

    <Row className="Description-Comment">
      <div className="col-sm-12 m-2"   >
        <p
          className="Description-Comment"
        >
          { props.Description }
        </p>

      </div>


    </Row>



  </div>
)
export default Comment;