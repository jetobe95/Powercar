import React from 'react';
import { Row } from 'reactstrap';
import PhotoNameTime from './../post/components/foto-name-time';
import './comment.css';

const Comment = (props) => (
  <div  >


    <div className="row">
      <div className="container">
        <div className="row">
          <PhotoNameTime { ...props } />
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