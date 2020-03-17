import React, { Component } from "react";
import "../common/style/app.css";
import AHeader from "../components/header";
import Footer from "../components/footer";

class Category extends Component {
  state = {
    orderList: [
      {
        imgSrc: "substitutePay.jpg",
        name: "代付款"
      },
      {
        imgSrc: "collectGoods.jpg",
        name: "待收货"
      },
      {
        imgSrc: "generationEvaluation.jpg",
        name: "待评价"
      },
      {
        imgSrc: "refund.jpg",
        name: "退款/售后"
      }
    ]
  };
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
                查看全部订单&nbsp;<span>&gt;</span>
              </div>
            </div>
            <div className="order-bt">
              <ul className="order-ul">
                {this.state.orderList.map((item, index) => {
                  return (
                    <li key={item+index} className="order-li">
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default Category;
