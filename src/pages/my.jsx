import React, { Component } from "react";
import "../common/style/app.css";
import AHeader from "../components/header";
import Footer from "../components/footer";

class Category extends Component {
  state = {};
  render() {
    return (
      <div className="my">
        <AHeader title="我的" />
        <div className="bodyblock">
          <div className="top">
            <div className="actor">
              <img
                src="http://img0.imgtn.bdimg.com/it/u=1972224372,2850391150&fm=26&gp=0.jpg"
                alt=""
              />
              <div className="text">
                <span className="user-name">molly</span>
                <span className="sign">时间，带不走真正的朋友；岁月，留不住虚幻的拥有。</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Category;
