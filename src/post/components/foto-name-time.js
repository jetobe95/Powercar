import React from 'react';
import timeAgoCalc from "../../timeAgo/time-ago-calc";
import "../card.css";

function PhotoNameTime (props){
return(
    <div className="col-sm-3">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-auto nickname-hora">
                      <img
                        className="Path "
                        src={ props.foto  }
                        alt=""
                      />


                       <div className="nickname-hora-content" >
                      <h3
                        className="Name">

                        { props.Name }

                      </h3>
                      <h3
                        className="-hrs-ago">

                        { timeAgoCalc(props.creacion)  }

                      </h3>

                    </div>
                    </div>
                  </div>
                </div>

              </div>
);
}

export default PhotoNameTime;