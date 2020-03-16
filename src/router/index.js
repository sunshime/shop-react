// 配置路由

import React, { Component } from "react";
// 路由依赖
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
// 异步组件
import AsyncComponent from "../util/asyncComponent";

// 引入共同的样式问题
import "../common/less/base.css";

// 组件页面
const Home = AsyncComponent(() => import("../pages/home"));
const About = AsyncComponent(() => import("../pages/about"));
const Category = AsyncComponent(() => import("../pages/category"));
const Info = AsyncComponent(() => import("../pages/info"));
const Cart = AsyncComponent(() => import("../pages/cart"));
const My = AsyncComponent(() => import("../pages/my"));

const routerList = [
  { path: "/", exact: true, component: Home },
  { path: "/about", exact: false, component: About },
  { path: "/category", exact: false, component: Category },
  { path: "/info", exact: false, component: Info },
  { path: "/cart", exact: false, component: Cart },
  { path: "/my", exact: false, component: My }
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
