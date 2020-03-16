import React, { Component } from "react";
import "../common/style/app.css";
import AHeader from "../components/header";
import Footer from '../components/footer'

class Category extends Component {
  state = {};
  render() {
    return <div>
        <AHeader title="我的"/>
        <Footer/>
    </div>;
  }
}

export default Category;
