import React, { Component } from "react";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="headers">
          <span className="icon-catalog margin-ft"></span>
          <span className="title">{this.props.title}</span>
          <span className="icon-jilu margin-ft"></span>
        </div>
      </div>
    );
  }
}

export default Home;
