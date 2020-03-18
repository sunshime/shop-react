import React, { Component } from "react";
import "../common/style/app.css";
import AHeader from "../components/header";
import Footer from "../components/footer";
import News from "../components/news";

class Category extends Component {
  state = {};

  render() {
    return (
      <div className="info">
        <AHeader title="消息" />
        <News />
        <Footer />
      </div>
    );
  }
}

export default Category;
