import React, { Component } from "react";
import "../common/style/app.css";

class Record extends Component {
  state = {
    list: [
      { cont: "1、该项目是一个移动端的商城项目", sublist: [] },
      { cont: "2、它使用了react、react-redux来实现的", sublist: [] },
      {
        cont: "3、它主要包括以下几个部分：",
        sublist: [
          "（1）首页部分，其中包含了导航栏、轮播图、还有商品列表",
          "（2）分类页面，其中包含了导航栏（可以滑动选择不同的项）和商品列表",
          "（3）消息页面，可以查看联系人列表以及消息列表（消息内容暂无）",
          "（4）购物车页面，可以查看自己加入购物车的内容，并进行相应选择结算",
          "（5）我的页面，其中包含了个人信息（可以上传头像）、我的订单等部分"
        ]
      }
    ]
  };
  render() {
    return (
      <div className="about">
        <div className="title">关于我们</div>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={item + index}>
              <div className="bigTitle">{item.cont}</div>
              {
                item.sublist.length>0&&item.sublist.map((items,indexs)=>{
                  return (
                  <div className="subTitle" key={items+indexs}>{items}</div>
                  )
                })
              }
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Record;
