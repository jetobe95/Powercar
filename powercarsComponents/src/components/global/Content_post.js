import React, {Component} from 'react';
import '/home/danielmp96/powercars/src/index_post.css'
import makeapost from './img/makeapost.png'
import searchbox from '/home/danielmp96/powercars/src/components/global/img/searchbox.png'
import searchlook from '/home/danielmp96/powercars/src/components/global/img/searchlook.png'
import square from '/home/danielmp96/powercars/src/components/global/img/square.png'
import checkcircle from '/home/danielmp96/powercars/src/components/global/img/checkcircle.png'
import checkedcircle from '/home/danielmp96/powercars/src/components/global/img/checkedcircle.png'

class Content_com extends Component {
  render() {
    return (
      <div>
        <body className="content_com">
          <div class="makeapost">
            <img src={makeapost} alt="makeapost"/>
          </div>
          <div class="searchbox">
            <img src={searchbox} alt="searchbox"/>
            <div class="Search">
              <p>Search...</p>
            </div>
            <div class="searchlook">
              <img src={searchlook} alt="searchlook"/>
            </div>
          </div>
          <div class="filter">
            <p>Filter</p>
          </div>
          <div class="square">
            <img src={square} alt="square"/>
          </div>
          <div class="filterby">
            <p>
              New
              <br></br>
              Old
              <br></br>
              Most comments
              <br></br>
              Most shared
            </p>
          </div>
          <div class="checkcircle1">
            <img src={checkedcircle} alt="checkedcircle"/>
          </div>
          <div class="checkcircle2">
            <img src={checkcircle} alt="checkcircle"/>
          </div>
          <div class="checkcircle3">
            <img src={checkcircle} alt="checkcircle"/>
          </div>
          <div class="checkcircle4">
            <img src={checkcircle} alt="checkcircle"/>
          </div>
        </body>
      </div>
    );
  }
}

export default Content_com;
