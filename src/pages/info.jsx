import React, { Component } from "react";
import "../common/style/app.css";
import AHeader from "../components/header";
import Footer from "../components/footer";
import "../common/style/app.css";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ""
    };
  }

  onLoadImg() {
    let _this = this;
    console.log(121212121, document.querySelector("#inputId").files[0]);
    let getFile = document.getElementById("inputId").files[0];
    if (getFile) {
      // 读取文件
      var reader = new FileReader();
      // 将图片文件转为base64
      reader.readAsDataURL(getFile);

      reader.onload = function(e) {
        // console.log(1111111111,e.target.result);
        // 显示图片
        console.log(this.result);
        _this.setState({
          img: e.target.result
        });
      };
    }
  }
  render() {
    return (
      <div className="info">
        <AHeader title="消息" />
        <div className="img">
          <input
            type="file"
            id="inputId"
            onChange={this.onLoadImg.bind(this)}
          />
        </div>

        <div className="avator">
          {this.state.img && <img src={this.state.img} alt="" />}
          {this.state.img==="" && <img src={require('../common/images/avator.jpg')} alt="" />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Category;
