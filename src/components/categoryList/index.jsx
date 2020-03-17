import React, { Component } from "react";
import "./index.css";
import cateList from "../../util/data";
class CategoryList extends Component {
  state = {};
  render() {
    return (
      <div className="categorylist">
        {/* {cateList.map((item, index) => {
          return ( */}
            <div className="module">
              <div className="title">
                <span className="line"></span>
                <span className="title-name">连衣裙</span>
                <span className="line rt"></span>
              </div>
              <ul className="content"></ul>
            </div>
          {/* );
        })} */}
      </div>
    );
  }
}

export default CategoryList;
