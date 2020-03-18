import React, { Component } from "react";
import ReactSwipe from "react-swipe";
import AHeader from "../components/header";
import Footer from "../components/footer";
import "../common/style/app.css";
import { swipeList, activeList, hotSaleList, navList } from "../api/homeData";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  render() {
    return (
      <div className="home">
        <AHeader title="首页" />
        <ReactSwipe
          swipeOptions={{ continuous: true, auto: 3000 }}
          key={swipeList.length}
          className="swipers"
        >
          {swipeList.map((item, index) => {
            return (
              <div key={index} className="swiper">
                <img src={require("../common/images" + item)} alt="" />
              </div>
            );
          })}
        </ReactSwipe>
        <div className="nav">
          <ul>
            {navList.map((item, index) => {
              return (
                <li>
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
        <div className="bodyblock">
          <div className="block-active">
            <ul>
              {activeList.map((item, index) => {
                return (
                  <li className="items" key={item + index}>
                    <div className="title">
                      <img src={item.titleImg} alt={item.bigTitle} />
                      <span>{item.titleIntroduce}</span>
                    </div>
                    <ul className="content">
                      {item.list.map((items, indexs) => {
                        return (
                          <li key={items + indexs}>
                            <img src={items.img} alt="" />
                            <div className="rt">
                              {items.smallTitle && (
                                <span className="smallTitle">
                                  {items.smallTitle}
                                </span>
                              )}
                              <span className="introduce">
                                {items.introduce}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="recommend">
            <img
              src="https://img.alicdn.com/simba/img/TB1pIQFjbr1gK0jSZR0SuvP8XXa.jpg"
              alt=""
            />
          </div>
          {/* 热卖单品 */}
          <div className="hot-sale">
            <div className="title">
              <span>热卖单品</span>
            </div>
            <div className="sale-bodyblock">
              <ul>
                {hotSaleList.map((item, index) => {
                  return (
                    <li key={item + index}>
                      <img src={item.detailImg} alt="" />
                      <p>{item.title}</p>
                      <div className="hot-bt">
                        <span>
                          <span className="mark">￥</span>
                          <span className="price">{item.price}</span>
                        </span>
                        <span className="volume">
                          {item.salesVolume !== 0
                            ? "销量：" + item.salesVolume
                            : ""}
                        </span>
                      </div>
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

export default Home;
