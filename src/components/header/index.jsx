import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import About from "../../pages/about";
import "./index.css";

class Home extends Component {
  //   参数设置
  constructor(props) {
    super(props);
    this.state = {
      navState: false // 是否显示导航栏
    };

    this.toggleNav = this.toggleNav.bind(this);
  }
  // 父传子的参数校验
  static propTypes = {
    record: PropTypes.any,
    title: PropTypes.string
  };

  // 切换导航栏
  toggleNav() {
    this.setState({
      navState: !this.state.navState
    });
  }

  //   css动画组件设置为目标组件
  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <div className="headers">
          <span
            className="icon-catalog margin-ft"
            onClick={this.toggleNav}
          ></span>
          <span className="title">{title}</span>
          {/* <span className="icon-jilu margin-ft"></span> */}
          <span className="margin-ft"></span>
        </div>

        {/* component={this.FirstChild} 可有可无*/}
        <ReactCSSTransitionGroup
          component={this.FirstChild}
          transitionName="nav"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.state.navState && (
            <div className="nav-slide" onClick={this.toggleNav}>
              <About />
            </div>
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

  // tog(e){
  //   e.stopPropagation();
  //   console.log(112112);
  // }
}

export default Home;
