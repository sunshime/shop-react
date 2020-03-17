import React, { Component } from "react";
import "../common/style/app.css";
import AHeader from "../components/header";
import Footer from "../components/footer";
import CategoryList from "../components/categoryList";

class Category extends Component {
  state = {
    navList: [
      { id: 1, name: "女装" },
      { id: 2, name: "男装" },
      { id: 3, name: "鞋靴" },
      { id: 4, name: "箱包" },
      { id: 5, name: "童装玩具" },
      { id: 6, name: "家电" },
      { id: 7, name: "数码" },
      { id: 8, name: "眼镜" },
      { id: 9, name: "手表" },
      { id: 10, name: "运动" },
      { id: 11, name: "户外" },
      { id: 12, name: "乐器" },
      { id: 13, name: "游戏" },
      { id: 14, name: "动漫" },
      { id: 15, name: "影视" },
      { id: 16, name: "鲜花" },
      { id: 17, name: "美食" },
      { id: 18, name: "建材" },
      { id: 19, name: "家具" },
      { id: 20, name: "汽车" },
      { id: 21, name: "百货" },
      { id: 22, name: "家庭保健" },
      { id: 23, name: "学习" },
      { id: 24, name: "宠物" }
    ],
    id: 1 // 默认显示女装
  };

  checkNav(id) {
    // console.log("id=====>", id);
    this.setState({ id: id });
  }

  render() {
    return (
      <div className="category">
        <AHeader title="商品分类" />
        <div className="nav">
          <div className="tab-nav">
            <ul className="tab-ul">
              {this.state.navList.map((item, index) => {
                return (
                  <li
                    className={
                      item.id === this.state.id ? "tab-li active" : "tab-li"
                    }
                    key={item + index}
                    onClick={this.checkNav.bind(this, item.id)}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <CategoryList id={this.state.id} />
        <Footer />
      </div>
    );
  }
}

export default Category;
