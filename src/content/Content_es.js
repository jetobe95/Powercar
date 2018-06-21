import React, {Component} from 'react';
import '/home/danielmp96/powercars/src/index_es.css'
import group from './img/group.png'


class Content_es extends Component {
  render() {
    return (
      <div>
        <body className="content_es">
          <div class="container">
            <br></br>
            <br></br>
            <h2>
              <small class="text-muted">
              <strong>Welcome to our platform</strong>
              </small>
            </h2>
            <br></br>
            <h3>
              <small class="text-muted">Discuss our brand and send your best recomendation</small>
            </h3>
            <br></br>
            <button className="btn btn-success" type="button">Make a post</button>
            <div class="group">
              <img src={group} alt="group"/>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Content_es;
