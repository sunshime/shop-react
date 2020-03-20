import React, { Component, Fragment } from "react";
import "../common/style/app.css";
import AHeader from "../components/header";
import Footer from "../components/footer";

class Category extends Component {
  state = {
    dataList: [
      {
        kinds: "you can",
        list: [
          {
            img:
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=97571592,2934218527&fm=11&gp=0.jpg",
            title: "时间看似残忍，其实不然，只是美与真之间，总是留下真而已。",
            price: 12,
            num: 1,
            checked: false
          },
          {
            img:
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1545504521,501407176&fm=11&gp=0.jpg",
            title: "时间会见证和成全一切成长和改变。",
            price: 122,
            num: 1,
            checked: false
          },
          {
            img:
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3394426466,628987709&fm=26&gp=0.jpg",
            title: "这一切还需要文字记录，让人心感受，所以文字乃我所喜爱之二。",
            price: 299,
            checked: false
          },
          {
            img:
              "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1092627708,517203178&fm=11&gp=0.jpg",
            title: "少年听雨歌楼上，壮年听雨客舟中，暮年听雨僧庐下。",
            price: 112,
            num: 1,
            checked: false
          }
        ]
      },
      {
        kinds: "时光逆流店",
        list: [
          {
            img:
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3829540518,272129763&fm=11&gp=0.jpg",
            title:
              "公道世间唯白发，贵人头上不曾饶。少年易老学难成，一寸光阴不可轻。",
            price: 312,
            num: 1,
            checked: false
          },
          {
            img:
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=186331454,2043130141&fm=26&gp=0.jpg",
            title:
              "愿每个人都能发现最美的文字表达最真实的自己，不负韶华，留下最美时光。最美的时光沉淀出最美的文字，在最美的文字中追忆最美的时光。",
            price: 102,
            num: 1,
            checked: false
          },
          {
            img:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183246121,2109342373&fm=26&gp=0.jpg",
            title:
              "时间和文字在一个个老庭院里厮磨，这是文化存在的极温暖方式。千般荒凉，以此为梦；万里蹀躞，以此为归。",
            price: 100,
            num: 1,
            checked: false
          }
        ]
      }
    ],
    isChecked: false, // 是否全选
    checkList: [] // 选中的项
  };

  // 单选
  selectItem(item) {
    // console.log('item====>',item);
    item.checked = !item.checked;
    this.getCheck();
    this.setState({
      isChecked: this.isCheckedAll()
    });
  }

  // 全选
  selectAll() {
    // console.log("全选。。。。");
    // 先判断是否有某一项没有被选中,有，则让每一项都变成选中，反之都变成不选中
    let isSelectAll = this.isCheckedAll();
    let lists = [...this.state.dataList];
    for (let i = 0; i < lists.length; i++) {
      const item = lists[i];
      for (let j = 0; j < item.list.length; j++) {
        const item1 = item.list[j];
        item1.checked = !isSelectAll;
        this.setState({
          isChecked: !isSelectAll
        });
      }
    }
    this.setState({
      dataList: [...lists]
    });
    this.getCheck();
  }

  // 判断各个项是否都被选中了
  isCheckedAll() {
    // 假设全部已经被选中
    let isSelectAll = true;
    // 遍历数组，找出没有被选中的项，推翻假设
    let lists = [...this.state.dataList];
    for (let i = 0; i < lists.length; i++) {
      const item = lists[i];
      for (let j = 0; j < item.list.length; j++) {
        const item1 = item.list[j];
        if (!item1.checked) {
          isSelectAll = false;
          // 结束循环
          return isSelectAll;
        }
      }
    }
    return isSelectAll;
  }

  // 拿到选中的项
  getCheck() {
    let newList = [...this.state.dataList];
    let checkList = [];
    newList.forEach((item, index) => {
      item.list.forEach((item1, index1) => {
        if (item1.checked) {
          checkList.push(item1);
        }
      });
    });
    this.setState({
      checkList: [...checkList]
    });
    console.log("checkList===>选中的项", checkList);
  }

  // 删除某一项
  deleteItem(item, index) {
    let list = [...this.state.dataList];
    list.forEach((item1, index1) => {
      item1.list.forEach((item2, index2) => {
        if (item2 === item) {
          item1.list.splice(index, 1);
        }

        if (item1.list.length < 1) {
          list.splice(index1, 1);
        }
      });
    });

    console.log("===>", list);

    this.setState({
      dataList: [...list]
    });
  }

  // 减数量
  reduce() {}

  // 加数量
  increase() {}

  render() {
    return (
      <div className="cart">
        <AHeader title="购物车" />
        <div className="content">
          {this.state.dataList.map((item, index) => {
            return (
              <div key={item + index}>
                <div className="categorys">{item.kinds}</div>
                {item.list.map((item1, index1) => {
                  return (
                    <div key={item1 + index1} className="item">
                      <div
                        className="select_wrap"
                        onClick={this.selectItem.bind(this, item1)}
                      >
                        {item1.checked && (
                          <img
                            className="select"
                            src="https://i.loli.net/2020/03/05/2ODunK73vlaHhIw.png"
                            alt=""
                          />
                        )}
                        {!item1.checked && (
                          <img
                            className="select"
                            src="https://i.loli.net/2020/03/05/zaBLDGlk2dCUwZQ.png"
                            alt=""
                          />
                        )}
                      </div>
                      <img className="btimg" src={item1.img} alt="" />
                      <div className="item_wrap">
                        <div className="title">{item1.title}</div>
                        <div className="bottoms">
                          <span className="left">￥{item1.price}</span>
                          <div className="operate">
                            <span
                              className="operate-click"
                              onClick={this.reduce.bind(this, item1)}
                            >
                              -
                            </span>
                            <span className="operate-click operate-num">
                              {item1.num}
                            </span>
                            <span
                              className="operate-click"
                              onClick={this.increase.bind(this, item1)}
                            >
                              +
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="delete-item"
                        onClick={this.deleteItem.bind(this, item1, index1)}
                      >
                        删除
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="footer_wrap">
          <div className="wrap-lt">
            <div className="lts" onClick={this.selectAll.bind(this)}>
              <div className="select_wrap">
                {this.state.isChecked && (
                  <img
                    src="https://i.loli.net/2020/03/05/2ODunK73vlaHhIw.png"
                    alt=""
                  />
                )}
                {!this.state.isChecked && (
                  <img
                    src="https://i.loli.net/2020/03/05/zaBLDGlk2dCUwZQ.png"
                    alt=""
                  />
                )}
              </div>
              <div className="allselect">全选</div>
            </div>
            <div className="rts">
              总计：<span>￥256</span>
            </div>
          </div>
          <div className="wrap-rt">去结算({this.state.checkList.length})</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Category;
