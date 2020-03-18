import React, { Component, Fragment } from "react";
import "./index.css";

class Liaison extends Component {
  state = {
    linkList: [
      {
        lid: 1,
        group: "陌生人",
        state: false, // 是否展开列表
        list: [
          {
            id: 1,
            name: "伊尔",
            sign: "想一千次，不如去做一次。华丽的跌倒，胜过无谓的徘徊。",
            avatar:
              "http://img4.imgtn.bdimg.com/it/u=3958657773,3923136077&fm=11&gp=0.jpg"
          },
          {
            id: 2,
            name: "科田",
            sign: "永远别去解释，理解你的人不需要；不理解你的人，不配要。",
            avatar:
              "http://img2.imgtn.bdimg.com/it/u=372764256,3394765004&fm=26&gp=0.jpg"
          },
          {
            id: 3,
            name: "比克",
            sign:
              "相信人生不会亏待你，你吃的苦，你受的累，你掉进的坑，你走错的路，都会练就独一无二成熟坚强感恩的你。",
            avatar:
              "http://img1.imgtn.bdimg.com/it/u=1361193036,1511808817&fm=26&gp=0.jpg"
          }
        ]
      },
      {
        lid: 2,
        group: "朋友",
        state: false, // 是否展开列表
        list: [
          {
            id: 1,
            name: "妮妮",
            sign: "不要总在过去的回忆里缠绵，昨天的太阳，晒不干今天的衣裳。",
            avatar:
              "http://img5.imgtn.bdimg.com/it/u=3381478340,4032618925&fm=11&gp=0.jpg"
          },
          {
            id: 2,
            name: "海明",
            sign: "脱下鞋子走路，才知地面温度。摘下面具做人，方觉人间温暖。",
            avatar:
              "http://img2.imgtn.bdimg.com/it/u=2897882445,1953570051&fm=11&gp=0.jpg"
          },
          {
            id: 3,
            name: "琼斯",
            sign: "人要拿得起，也要放得下。拿得起是生存，放得下是生活。",
            avatar:
              "http://img1.imgtn.bdimg.com/it/u=4072055420,177711515&fm=26&gp=0.jpg"
          },
          {
            id: 4,
            name: "默笙",
            sign:
              "每一次的跌倒后重新站起来，都会让人变得愈发坚强。生活，一半是回忆，一半是继续。",
            avatar:
              "http://img0.imgtn.bdimg.com/it/u=2600182404,1883113558&fm=11&gp=0.jpg"
          },
          {
            id: 5,
            name: "米绍",
            sign:
              "与其埋怨世界，不如改变自己。管好自己的心，做好自己的事，比什么都强。",
            avatar:
              "http://img2.imgtn.bdimg.com/it/u=1630523715,3017940819&fm=11&gp=0.jpg"
          },
          {
            id: 6,
            name: "吉格斯",
            sign:
              "告诉自己：我可以不完美，但一定要真实；我可以不富有，但一定要快乐！",
            avatar:
              "http://img0.imgtn.bdimg.com/it/u=445317885,850554753&fm=11&gp=0.jpg"
          }
        ]
      },
      {
        lid: 3,
        group: "其他",
        state: false, // 是否展开列表
        list: [
          {
            id: 1,
            name: "安碧娜",
            sign:
              "人生如行路，一路艰辛，一路风景，你的目光所及，就是你的人生境界。",
            avatar:
              "http://img1.imgtn.bdimg.com/it/u=1623783486,2776741895&fm=11&gp=0.jpg"
          },
          {
            id: 2,
            name: "明天",
            sign:
              "人生充满了起起落落，关键在于，在顶端时要好好享受，在低谷时不失勇气。",
            avatar:
              "http://img2.imgtn.bdimg.com/it/u=1184149742,625475472&fm=11&gp=0.jpg"
          },
          {
            id: 3,
            name: "Kevin",
            sign: "时间，带不走真正的朋友；岁月，留不住虚幻的拥有。",
            avatar:
              "http://img3.imgtn.bdimg.com/it/u=2312787721,498018518&fm=11&gp=0.jpg"
          },
          {
            id: 4,
            name: "立冬",
            sign:
              "无论做什么，不管想什么；初心是什么，结果得到什么；你都要善良，一如既往。",
            avatar:
              "http://img0.imgtn.bdimg.com/it/u=3520910162,3063201140&fm=26&gp=0.jpg"
          },
          {
            id: 5,
            name: "石克文",
            sign: "昨天再好，也走不回去；明天再难，也要抬脚继续。",
            avatar:
              "http://img4.imgtn.bdimg.com/it/u=3592686116,1343126232&fm=11&gp=0.jpg"
          }
        ]
      }
    ]
  };

  getMore(item) {
    item.state = !item.state;

    let list = [...this.state.linkList];
    list.map((items, indexs) => {
      if (items.lid === item.lid) {
        items = item;
      }
    });

    this.setState({
      linkList: list
    });
  }

  render() {
    return (
      <div className="liaison">
        <ul>
          {this.state.linkList.map((item, index) => {
            return (
              <li key={item.lid}>
                <div
                  className="lis-top"
                  onClick={this.getMore.bind(this, item)}
                >
                  <div className="icon">
                    {!item.state && (
                      <img
                        src={require("../../common/images/arrow.png")}
                        alt=""
                      />
                    )}
                    {item.state && (
                      <img
                        className="down-icon"
                        src={require("../../common/images/down.png")}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="names">{item.group}</div>
                </div>
                <div className="lis-ul">
                  {item.list.map((items, indexs) => {
                    return (
                      <Fragment>
                        {item.state && (
                          <div className="items-li" key={item.id}>
                            <div className="lts">
                              <img src={items.avatar} alt="" />
                            </div>
                            <div className="rts">
                              <div>{items.name}</div>
                              <div className="sign">{items.sign}</div>
                            </div>
                          </div>
                        )}
                      </Fragment>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Liaison;
