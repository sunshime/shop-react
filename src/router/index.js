// 配置路由

import React, { Component } from "react";
// 路由依赖
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
// 异步组件
import AsyncComponent from "../util/asyncComponent";

// 引入共同的样式问题
import '../common/less/base.css'

// 组件页面
const Home = AsyncComponent(() => import("../pages/home"));

const routerList = [
  {
    path: "/",
    exact: true,
    component: Home
  }
];

class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {routerList.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={item.component}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouteConfig;
