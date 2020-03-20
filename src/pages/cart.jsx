import React, { Component } from "react";
import "../common/style/app.css";
import AHeader from "../components/header";
import Footer from "../components/footer";

class Category extends Component {
  state = {
    dataList: [
      {
        kinds: "you can do it",
        list: [
          {
            img: "https://gw.alicdn.com/bao/uploaded/i4/671012022/O1CN01BdAQo11Qo7PhoGgk2_!!671012022.jpg_180x180xz.jpg_.webp",
            title: "MIUCO喇叭袖波点网纱衬衫+钉珠V领收腰背心裙连衣裙女2020春新款k",
            price: 278.2,
            num: 1,
            checked: false
          },
          {
            img: "https://gw.alicdn.com/bao/uploaded/i3/1122110005/O1CN018uhXao1BuKZMO0C7O_!!1122110005.jpg_180x180xz.jpg_.webp",
            title: "新款裙子女2019时尚流行针织连衣裙秋冬智熏法式V领修身桔梗裙ins",
            price: 99,
            num: 1,
            checked: false
          },
          {
            img: "https://gw.alicdn.com/bao/uploaded/i1/55391412/O1CN01Obt2Sa1MIjp3dcZor_!!0-item_pic.jpg_180x180xz.jpg_.webp",
            title: "雅宿 韩版秋冬加绒加厚格子衬衫女复古港风2019秋冬新款上衣pl51",
            price: 79,
            num: 1,
            checked: false
          },
          {
            img: "https://gw.alicdn.com/bao/uploaded/i1/63290421/O1CN01lpkTW01EyrK14efYi_!!0-item_pic.jpg_180x180xz.jpg_.webp",
            title: "【多件多折】唐狮2019秋新款休闲裤  女休闲裤休闲时尚长裤学生",
            price: 149,
            num: 1,
            checked: false
          }
        ]
      },
      {
        kinds: "时光逆流店",
        list: [
          {
            img: "https://gw.alicdn.com/bao/uploaded/i3/67305615/O1CN01TiTJX01rLiTq6OdGF_!!0-item_pic.jpg_180x180xz.jpg_.webp",
            title: "西林家19冬新款法式气质大蜜豆同款遮肉显瘦系带高腰阔腿牛仔裤女",
            price: 139.99,
            num: 1,
            checked: false
          },
          {
            img: "https://gw.alicdn.com/bao/uploaded/i1/1607659423/O1CN01g2taRO2JTmhMLOnRM_!!1607659423.jpg_180x180xz.jpg_.webp",
            title: "冬慵懒宽松趣味笑脸刺绣加绒加厚卫衣运动休闲连帽外套学生绒衫女",
            price: 95,
            num: 1,
            checked: false
          },
          {
            img: "https://gw.alicdn.com/bao/uploaded/i4/70870644/O1CN01RjNmiM1GczdYmKORy_!!70870644.jpg_180x180xz.jpg_.webp",
            title: "【年末清仓 直降40元】假两件套头卫衣女秋冬宽松羊羔毛绒外套",
            price: 100,
            num: 1,
            checked: false
          }
        ]
      }
    ],
    isChecked: false, // 是否全选
    checkList: [], // 选中的项
    buyPrice: 0 // 结算总价
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
    console.log("checkList===>选中的项", checkList);
    let buyPrice = 0;
    if (checkList.length > 0) {
      checkList.forEach(item => {
        buyPrice = buyPrice + item.price * item.num;
        this.setState({
          buyPrice: buyPrice
        });
      });
    }
    console.log("buyPrice==>", buyPrice);

    this.setState({
      buyPrice: buyPrice,
      checkList: [...checkList]
    });
    console.log("this.state.buyPrice==>", this.state.buyPrice);
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

    let checkList = [...this.state.checkList];
    if (checkList.length > 0) {
      checkList.forEach((item2, index2) => {
        if (item2 === item) {
          checkList.splice(index2, 1);
        }
      });
    }

    let buyPrice = 0;
    if (checkList.length > 0) {
      checkList.forEach(item3 => {
        buyPrice = buyPrice + item3.price * item3.num;
        this.setState({
          buyPrice: buyPrice
        });
      });
    }
    console.log("buyPrice===>11", buyPrice);

    this.setState({
      dataList: [...list],
      checkList: [...checkList],
      buyPrice: buyPrice
    });
    console.log("===>", list);
    console.log("checkList===>", this.state.checkList);
  }

  // 减数量
  reduce(item) {
    console.log("item====>", item);
    let list = [...this.state.dataList];
    list.forEach((item1, index1) => {
      item1.list.forEach((item2, index2) => {
        if (item2 === item) {
          console.log(item2);
          if (item2.num > 0) {
            item2.num--;
            this.setState({
              dataList: [...list]
            });
            this.getAllPrice();
          }
        }
      });
    });
  }

  // 加数量
  increase(item) {
    console.log("item====>", item);
    let list = [...this.state.dataList];
    list.forEach((item1, index1) => {
      item1.list.forEach((item2, index2) => {
        if (item2 === item) {
          console.log(item2);
          item2.num++;
          this.setState({
            dataList: [...list]
          });
          this.getAllPrice();
        }
      });
    });
  }

  // 计算价格
  getAllPrice() {
    let list = [...this.state.checkList];
    let buyPrice = 0;
    if (list.length > 0) {
      list.forEach(item => {
        buyPrice = buyPrice + item.price * item.num;
      });
    }

    this.setState({
      buyPrice: buyPrice
    });
  }

  render() {
    return (
      <div className="cart">
        <AHeader title="购物车" />
        <div className="content">
          {this.state.dataList.length > 0 && (
            <div>
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
          )}
          {this.state.dataList.length === 0 && (
            <div className="no-data">没有加入购物车的数据咯~</div>
          )}
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
              总计：<span>￥{this.state.buyPrice}</span>
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
