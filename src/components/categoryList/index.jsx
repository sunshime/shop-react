import React, { Component, Fragment } from "react";
import "./index.css";
import cateList from "../../api/categoryData";
class CategoryList extends Component {
  state = {};

  render() {
    const {id} = this.props;
    return (
      <div className="categorylist">
        {cateList.map((item, index) => {
          return (
            <Fragment key={item.id}>
              {id === item.id && (
                <Fragment>
                  {item.list.map((item1, index1) => {
                    return (
                      <div className="module" key={item1 + index1}>
                        <div className="title">
                          <span className="line"></span>
                          <span className="title-name">{item1.title}</span>
                          <span className="line rt"></span>
                        </div>
                        <ul className="content">
                          {item1.list.map((item2, index2) => {
                            return (
                              <li key={item2 + index2} className="item">
                                <div className="imgs">
                                  <img src={item2.img} alt="" />
                                </div>
                                <div className="text">
                                  <p>{item2.subTitle}</p>
                                  <div className="all-price">
                                    <div>
                                      ￥<span>{item2.price}</span>
                                    </div>
                                    <div className="price">
                                      ￥<span>{item2.oldPrice}</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </Fragment>
              )}
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default CategoryList;
