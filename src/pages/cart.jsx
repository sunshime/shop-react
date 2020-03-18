import React, { Component } from "react";
import "../common/style/app.css";
import AHeader from "../components/header";
import Footer from "../components/footer";

class Category extends Component {
  state = {};
  render() {
    return (
      <div>
        <AHeader title="购物车" />
        <h1 style={{ marginLeft: "150px", marginTop: "200px",fontSize:'20px' }}>开发中~</h1>
        <Footer />
      </div>
    );
  }
}

export default Category;
