import React, { Component } from "react";
import "../common/style/app.css";
import AHeader from "../components/header";
import Footer from "../components/footer";
import { orderList, aboutList } from "../api/myData";

class Category extends Component {
  state = {
    avator: ""
  };

  // 动态添加图片
  onLoadImg() {
    let _this = this;
    let file1 = document.getElementById("inputId").files[0];
    if (file1) {
      var reader = new FileReader();
      reader.readAsDataURL(file1);

      reader.onload = function(e) {
        _this.setState({ avator: e.target.result });
      };
    }
  }

  render() {
    return (
      <div className="my">
        <AHeader title="我的" />
        <div className="bodyblock">
          <div className="top">
            <div className="actor">
              <div className="set-avator">
                <input
                  type="file"
                  id="inputId"
                  onChange={this.onLoadImg.bind(this)}
                />
                {this.state.avator && <img src={this.state.avator} alt="" />}
                {!this.state.avator && (
                  <img src={require("../common/images/avator.jpg")} alt="" />
                )}
              </div>
              <div className="text">
                <span className="user-name">molly</span>
                <span className="sign">
                  时间，带不走真正的朋友；岁月，留不住虚幻的拥有。
                </span>
              </div>
            </div>
          </div>
          <div className="order">
            <div className="order-top">
              <div className="left">我的订单</div>
              <div className="right">
                <span>查看全部订单</span>
                <img src={require("../common/images/arrow.png")} alt="" />
              </div>
            </div>
            <div className="order-bt">
              <ul className="order-ul">
                {orderList.map((item, index) => {
                  return (
                    <li key={item + index} className="order-li">
                      <img
                        src={require("../common/images/" + item.imgSrc)}
                        alt=""
                      />
                      <span>{item.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="about">
            <ul className="about-ul">
              {aboutList.map((item, index) => {
                return (
                  <li className="about-li" key={item + index}>
                    <div className="left">
                      <img
                        src={require("../common/images/" + item.imgSrc)}
                        alt=""
                      />
                    </div>
                    <div
                      className={
                        index < aboutList.length - 1
                          ? "right"
                          : "right noborder"
                      }
                    >
                      <span className="lt">{item.name}</span>
                      <div className="rt">
                        <img
                          src={require("../common/images/arrow.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="pay-resource">
              <div className="about-li">
                <div className="left">
                  <img
                    src={require("../common/images/PayResources.jpg")}
                    alt=""
                  />
                </div>
                <div className="right noborder">
                  <span className="lt">付款资源</span>
                  <div className="rt">
                    <img src={require("../common/images/arrow.png")} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pay-resource">
              <div className="about-li">
                <div className="left">
                  <img
                    src={require("../common/images/payChannel.jpg")}
                    alt=""
                  />
                </div>
                <div className="right noborder">
                  <span className="lt">支付渠道</span>
                  <div className="rt">
                    <img src={require("../common/images/arrow.png")} alt="" />
                  </div>
                </div>
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
