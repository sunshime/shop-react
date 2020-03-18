import React, { Component } from "react";
import "./index.css";
import ChatMes from "../chatMes";
import Liaison from "../liaison";

class News extends Component {
  state = {
    nav: [
      { id: 1, value: "联系人" },
      { id: 2, value: "消息" }
    ],
    navID: 2
  };

  navTab(id) {
    this.setState({ navID: id });
  }

  render() {
    return (
      <div className="news">
        <div className="search">
          <div className="icon">
            <img src={require("../../common/images/search.png")} alt="" />
          </div>
          <input type="text" value="" placeholder="搜索" />
        </div>
        <div className="chat">
          <ul className="top">
            {this.state.nav.map((item, index) => {
              return (
                <li
                  className={
                    this.state.navID === item.id ? "item active" : "item"
                  }
                  key={item.id}
                  onClick={this.navTab.bind(this, item.id)}
                >
                  {item.value}
                </li>
              );
            })}
          </ul>
          <div className="bottom">
            {this.state.navID === 1 && <Liaison />}
            {this.state.navID === 2 && <ChatMes />}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
