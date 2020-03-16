import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './index.css'

class Footer extends Component {
  state = {
    //   底部导航栏
    footerNav: [
      { path: "/", exact: true, icon: "home.jpg", name: "首页" },
      { path: "/record", exact: false, icon: "category.jpg", name: "分类" },
      { path: "/record", exact: false, icon: "info.jpg", name: "消息" },
      { path: "/record", exact: false, icon: "my.jpg", name: "我的" }
    ]
  };
  render() {
    return (
      <div className="footer">
        <div className="foot-ul">
          {this.state.footerNav.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                exact={item.exact}
                key={item + index}
                className="foot-item"
              >
                <img src={require("../../common/images/" + item.icon)} alt="" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Footer;
