import React, {Component} from 'react';
import '/home/danielmp96/powercars/src/index_es.css'
import group from './img/group.png'
import makeapost from './img/makeapost.png'

class Content_es extends Component {
  render() {
    return (
      <div>
        <body>
          <div>
            <a class="makeapost">
              <img src={makeapost} alt="makeapost"/>
            </a>
          </div>
          <div class="group">
            <img src={group} alt="group"/>
          </div>
        </body>
      </div>
    );
  }
}

export default Content_es;
