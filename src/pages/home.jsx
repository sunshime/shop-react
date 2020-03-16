import React, { Component } from "react";
import ReactSwipe from "react-swipe";
import AHeader from "../components/header";
import Footer from '../components/footer'
import "../common/style/app.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      //   轮播图
      swipeList: [
        "/swiper1.jpg",
        "/swiper2.jpg",
        "/swiper3.jpg",
        "/swiper4.jpg"
      ],
      //   活动列表
      activeList: [
        {
          bigTitle: "有好货",
          titleIntroduce: "与品质生活不期而遇",
          titleImg:
            "https://img.alicdn.com/tfs/TB1tqpnegMPMeJjy1XcXXXpppXa-148-48.png",
          list: [
            {
              smallTitle: "可折叠加厚双面使用榻榻米床垫",
              introduce:
                "可以折叠的榻榻米床垫，收纳不占空间，正反两面都可以使用，同时纯棉材质舒适亲肤，透气性好，保持贴身换将干爽 不粘腻。",
              img:
                "https://img.alicdn.com/imgextra/i3/1914575403/TB2Y1CoqQ9WBuNjSspeXXaz5VXa_!!1914575403-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"
            },
            {
              smallTitle: "Puma Defy 赛琳娜限定",
              introduce: "设计上继续主打高街风格的科幻元素。",
              img:
                "https://img.alicdn.com/imgextra/i4/1022433859/O1CN01qkuVDn1eNSuEj5e6u_!!1022433859-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"
            },
            {
              smallTitle: "Sofina18年春季限定樱花粉饼",
              introduce: "外壳粉嫩渐变，浮雕樱花彰显可爱气质。",
              img:
                "https://img.alicdn.com/imgextra/i1/3158956210/TB2wZ4IepuWBuNjSszbXXcS7FXa_!!3158956210-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"
            },
            {
              smallTitle: "大豆家  方头奶奶鞋",
              introduce: "一脚蹬设计，方便日常的穿脱。",
              img:
                "https://img.alicdn.com/tfscom/i1/1581756766/TB2TF0ch0zJ8KJjSspkXXbF7VXa_!!1581756766.jpg_180x180xzq90.jpg_.webp"
            },
            {
              smallTitle: "小仙女的花环，甘那许蛋糕模具",
              introduce: "选用液态硅胶制作而成，安全卫生。",
              img:
                "https://img.alicdn.com/imgextra/i1/2895773580/O1CN01cfU4V01cJgOdPPJlS_!!2895773580-2-beehive-scenes.png_180x180xzq90.jpg_.webp"
            },
            {
              smallTitle: "办公室午睡神器",
              introduce: "专为午睡设计，使用起来方便舒适。",
              img:
                "https://img.alicdn.com/imgextra/i1/810373898/O1CN01alx0rm1efKNHkAk07_!!810373898-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"
            }
          ]
        },
        {
          bigTitle: "爱逛街",
          titleIntroduce: "献给聪明可爱的你",
          titleImg:
            "https://img.alicdn.com/tfs/TB1UNX2bSFRMKJjy0FhXXX.xpXa-112-46.png",
          list: [
            {
              smallTitle: "",
              introduce:
                "2017新款潮女士双肩包韩版时尚休闲百搭pu软皮背包个性简约包包",
              img:
                "https://img.alicdn.com/bao/uploaded/TB28TQ1nrBmpuFjSZFAXXaQ0pXa_!!2996832334.png_180x180xzq90.jpg_.webp"
            },
            {
              smallTitle: "",
              introduce:
                "美国艾蒂宝趴趴枕午睡枕趴睡枕学生小午睡神器办公室抱枕午休枕头",
              img:
                "https://img.alicdn.com/bao/uploaded/TB2jH_uoFXXXXXfXpXXXXXXXXXX_!!0-dgshop.jpg_180x180xzq90.jpg_.webp"
            },
            {
              smallTitle: "",
              introduce:
                "香港进口特产美心原味鸡蛋卷32大条礼盒装儿童休闲零食糕点饼干",
              img:
                "https://img.alicdn.com/bao/uploaded/TB2i9iuoFXXXXbPXpXXXXXXXXXX_!!0-juitemmedia.jpg_180x180xzq90.jpg_.webp"
            },
            {
              smallTitle: "",
              introduce:
                "秋冬季棉拖鞋包跟厚底情侣家居防滑保暖居家男女月子拖鞋冬天加厚",
              img:
                "https://img.alicdn.com/bao/uploaded/i0/TB1s.15NFXXXXbMaXXXXXXXXXXX_!!0-item_pic.jpg_180x180xzq90.jpg_.webp"
            },
            {
              smallTitle: "",
              introduce:
                "原创品牌日系学生单肩女包百搭休闲文艺小清新简约帆布包布袋大包",
              img:
                "https://img.alicdn.com/bao/uploaded/TB2BnymXX95V1Bjy0FdXXc5BVXa_!!664782798-0-goldwindow.jpg_180x180xzq90.jpg_.webp"
            },
            {
              smallTitle: "",
              introduce:
                "格莱达大容量保温杯男士保温壶户外不锈钢车载旅游保温水壶2L定制",
              img:
                "https://img.alicdn.com/bao/uploaded/TB2jQl2ml0kpuFjy1zdXXXuUVXa_!!0-juitemmedia.jpg_180x180xzq90.jpg_.webp"
            }
          ]
        }
      ],
      //   热卖单品
      hotSaleList: [
        {
          title: "2016年春Gillivo嘉里奥新款零钱包正品专柜",
          detailImg:
            "https://img.alicdn.com/bao/uploaded/i3/446693207/TB283ZslFXXXXX4XXXXXXXXXXXX_!!446693207.jpg_200x200q90.jpg_.webp",
          price: 12,
          salesVolume: 1
        },
        {
          title: "春中大女童学院风娃娃领纯棉中长款风衣外套",
          detailImg:
            "https://img.alicdn.com/bao/uploaded/i4/12524484/O1CN01EfZBZA1iziY14s3yh_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",
          price: 151.1,
          salesVolume: 6
        },
        {
          title: "白色破洞牛仔短裤女夏高腰2019新款韩版宽松大码显瘦毛边阔腿热裤",
          detailImg:
            "https://img.alicdn.com/bao/uploaded/i1/3201581578/TB1YYNXc1uSBuNjSsziXXbq8pXa_!!0-item_pic.jpg_200x200q90.jpg_.webp",
          price: 79,
          salesVolume: 24
        },
        {
          title: "尼泊尔进口羊毛毡纯手工萌物系列小奶牛单肩包大人/儿童斜挎包女",
          detailImg:
            "https://img.alicdn.com/bao/uploaded/i5/TB1ZjgTJVXXXXb2XXXXYXGcGpXX_M2.SS2_200x200q90.jpg_.webp",
          price: 65,
          salesVolume: 0
        },
        {
          title: "2020春夏吊带连衣裙明星同款名媛宴会星空亮片裙年会主持晚礼服",
          detailImg:
            "https://img.alicdn.com/bao/uploaded/i3/2550641536/TB22OaEe2jM8KJjSZFyXXXdzVXa_!!2550641536.jpg_200x200q90.jpg_.webp",
          price: 299,
          salesVolume: 100
        },
        {
          title: "2019春秋款 横竖条拼圆领休闲宽松卫衣长袖加厚T恤女 卡门T30C106",
          detailImg:
            "https://img.alicdn.com/bao/uploaded/i1/62174580/TB2rC4KrbsTMeJjy1zbXXchlVXa_!!62174580.jpg_200x200q90.jpg_.webp",
          price: 135,
          salesVolume: 0
        },
        {
          title: "SUNGDO GIN独立设计师春夏新品黑色几何腰金边西装短裤",
          detailImg:
            "https://img.alicdn.com/bao/uploaded/i1/45738681/TB2tNLyebRkpuFjSspmXXc.9XXa_!!45738681.jpg_200x200q90.jpg_.webp",
          price: 342.3,
          salesVolume: 0
        },
        {
          title: "T119韩国女装代设计感简约棉质春秋长袖套头女卫衣毛圈新品2019",
          detailImg:
            "https://img.alicdn.com/bao/uploaded/i4/75318385/TB2m5FLcbSYBuNjSspiXXXNzpXa_!!75318385.jpg_200x200q90.jpg_.webp",
          price: 158,
          salesVolume: 1
        }
      ]
    };
  }
  render() {
    return (
      <div className="home">
        <AHeader title="首页" />
        <ReactSwipe
          swipeOptions={{ continuous: true, auto: 3000 }}
          key={this.state.swipeList.length}
          className="swipers"
        >
          {this.state.swipeList.map((item, index) => {
            return (
              <div key={index} className="swiper">
                <img src={require('../common/images'+item)} alt="" />
              </div>
            );
          })}
        </ReactSwipe>
        <div className="nav">
          <ul>
            <li>
              <img src={require("../common/images/nav.png")} alt="" />
              <span>衣服</span>
            </li>
            <li>
              <img src={require("../common/images/nav.png")} alt="" />
              <span>鞋子</span>
            </li>
            <li>
              <img src={require("../common/images/nav.png")} alt="" />
              <span>家居</span>
            </li>
            <li>
              <img src={require("../common/images/nav.png")} alt="" />
              <span>生活用品</span>
            </li>
          </ul>
        </div>
        <div className="bodyblock">
          <div className="block-active">
            <ul>
              {this.state.activeList.map((item, index) => {
                return (
                  <li className="items" key={item + index}>
                    <div className="title">
                      <img src={item.titleImg} alt={item.bigTitle} />
                      <span>{item.titleIntroduce}</span>
                    </div>
                    <ul className="content">
                      {item.list.map((items, indexs) => {
                        return (
                          <li key={items + indexs}>
                            <img src={items.img} alt="" />
                            <div className="rt">
                              {items.smallTitle && (
                                <span className="smallTitle">
                                  {items.smallTitle}
                                </span>
                              )}
                              <span className="introduce">
                                {items.introduce}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="recommend">
            <img
              src="https://img.alicdn.com/simba/img/TB1pIQFjbr1gK0jSZR0SuvP8XXa.jpg"
              alt=""
            />
          </div>
          {/* 热卖单品 */}
          <div className="hot-sale">
            <div className="title">
              <span>热卖单品</span>
            </div>
            <div className="sale-bodyblock">
              <ul>
                {this.state.hotSaleList.map((item, index) => {
                  return (
                    <li key={item + index}>
                      <img src={item.detailImg} alt="" />
                      <p>{item.title}</p>
                      <div className="hot-bt">
                        <span>
                          <span className="mark">￥</span>
                          <span className="price">{item.price}</span>
                        </span>
                        <span className="volume">
                          {item.salesVolume !== 0
                            ? "销量：" + item.salesVolume
                            : ""}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
