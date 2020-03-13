import React, { Component } from "react";
import ReactSwipe from "react-swipe";
import AHeader from "../components/header";
import '../common/style/app.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      swipeList: [
        "https://i.loli.net/2020/03/13/ovQcBwXiaWIh5pO.jpg",
        "https://i.loli.net/2020/03/13/xO58VqQas2eGLT3.jpg",
        "https://i.loli.net/2020/03/13/gKC58MVdhx6kbTQ.jpg"
      ]
    };
  }
  render() {
    
    return (
      <div className="home">
        <AHeader title="首页" />
        <ReactSwipe swipeOptions={{continuous:true,auto:3000}} key={this.state.swipeList.length}>
          {this.state.swipeList.map((item, index) => {
            return (
              <div key={index} className="swiper">
                <img src={item} alt="" />
              </div>
            );
          })}
        </ReactSwipe>
      </div>
    );
  }
}

export default Home;
