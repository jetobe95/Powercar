import React, { Component } from 'react';
import log from '../logo.svg'
import './card.css'
import { Row, Col, Button, } from 'reactstrap';
import {
  Link,Redirect
} from 'react-router-dom'

class CardPost extends Component {
  state = {
    collapse: false,
    hidden: (this.props.hidden),
    redirect:false,
    confirmRedirect:false
  }


  ButtonClick = () => {

    this.setState({
      collapse: !this.state.collapse,
    })


  }
  render() {
    
    
    if(this.state.redirect&&this.props.confirmRedirect) return(<Redirect to={`/viewcomment/${this.props.idposts||"/"}`} />)
    return (

      <div
        className="row centrar"
        onClick={()=>this.setState({redirect:true})}
      >

        <div
          className=" Top  "
        >
          <div className="container-fluid">
            <div className="row">


              <div className="col-sm-3">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-auto nickname-hora">
                      <img
                        className="Path "
                        src={ this.props.src }
                        alt=""
                      />


                       <div className="nickname-hora-content" >
                      <h3
                        className="Name">

                        { this.props.title }

                      </h3>
                      <h3
                        className="-hrs-ago">

                        { this.props.time }

                      </h3>

                    </div>
                    </div>
                  </div>
                </div>

              </div>



            </div>
            <div className="row">
              <div className="col-sm-12 m-4">

                <p
                  className="Description">
                  { this.props.Description }
                </p>
              </div>
            

            </div>
          </div>



        </div>
      </div>

    );
  };

}


export default CardPost;
