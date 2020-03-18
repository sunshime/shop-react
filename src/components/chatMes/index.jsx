import React, { Component } from "react";
import "./index.css";

class ChatMes extends Component {
  state = {
    chatList: [
      {
        id: 1,
        avatar:
          "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2471723103,4261647594&fm=26&gp=0.jpg",
        name: "hiha",
        news: "没有谁的人生是一帆风顺的",
        time: "2020-3-15"
      },
      {
        id: 2,
        avatar:
          "http://img5.imgtn.bdimg.com/it/u=2717062052,3164034025&fm=26&gp=0.jpg",
        name: "req",
        news: "没有谁一生下来就懂得成长",
        time: "2020-3-18"
      },
      {
        id: 3,
        avatar:
          "http://img4.imgtn.bdimg.com/it/u=2826129518,240074888&fm=26&gp=0.jpg",
        name: "frg",
        news: "是经过了不断的磨练，我们才学会了成长",
        time: "2020-3-17"
      },
      {
        id: 4,
        avatar:
          "http://img0.imgtn.bdimg.com/it/u=622451152,3709659384&fm=11&gp=0.jpg",
        name: "uiw",
        news: "你只能折腾到在乎你的人，对于不在乎你的人，忘记了你的人，你的所作所为根本起不了任何作用。",
        time: "2020-3-16"
      },
      {
        id: 5,
        avatar:
          "http://img0.imgtn.bdimg.com/it/u=4008167438,875420318&fm=11&gp=0.jpg",
        name: "poop",
        news: "低头是一种潜质，它不是自卑，也不是怯弱，它是清醒中的嬗变。",
        time: "2020-3-16"
      },
      {
        id: 6,
        avatar:
          "http://img3.imgtn.bdimg.com/it/u=1152772125,3388989574&fm=11&gp=0.jpg",
        name: "nika",
        news: "稍微低一下头，或者我们的人生路会更精彩。",
        time: "2020-3-15"
      },
      {
        id: 7,
        avatar:
          "http://img1.imgtn.bdimg.com/it/u=97571592,2934218527&fm=11&gp=0.jpg",
        name: "frg",
        news: "一个人总要走陌生的路，看陌生的风景，听陌生的歌。",
        time: "2020-3-17"
      },
      {
        id: 8,
        avatar:
          "http://img5.imgtn.bdimg.com/it/u=280339489,3521108476&fm=26&gp=0.jpg",
        name: "uiw",
        news: "最后你会发现，原本费尽心机想要忘记的事情真的就那么忘记了。",
        time: "2020-3-16"
      },
      {
        id: 9,
        avatar:
          "http://img2.imgtn.bdimg.com/it/u=2626877385,2524735107&fm=11&gp=0.jpg",
        name: "poop",
        news: "别因为别人说了你想听的话，就相信他们；也别因为别人说了你不想听的话，就记恨他们。",
        time: "2020-3-16"
      },
      {
        id: 10,
        avatar:
          "http://img4.imgtn.bdimg.com/it/u=2231231470,4098557134&fm=26&gp=0.jpg",
        name: "nikaqq",
        news: "有时，好听的话不一定是真话，不想听的话未必就是坏话。",
        time: "2020-3-15"
      },
      {
        id: 11,
        avatar:
          "http://img3.imgtn.bdimg.com/it/u=1980532550,2285588719&fm=11&gp=0.jpg",
        name: "poopwww",
        news: "人生做的是一场减法，见一面少一面，所以有人说，不是你现在有多少钱，而是你还能活多少年。",
        time: "2020-3-16"
      },
      {
        id: 12,
        avatar:
          "http://img3.imgtn.bdimg.com/it/u=3235211859,22762362&fm=11&gp=0.jpg",
        name: "nikaxdss",
        news: "人生不过三万天，成功和失败均要坦然，是非恩怨莫在意，健康快乐最值钱。",
        time: "2020-3-15"
      }
    ]
  };
  render() {
    return (
      <div className="chatmes">
        <ul>
          {this.state.chatList.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="lt">
                  <img src={item.avatar} alt="" />
                </div>
                <div className="rt">
                  <div className="tops">
                    <span className="name">{item.name}</span>
                    <span>{item.time}</span>
                  </div>
                  <div className="bot">{item.news}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ChatMes;
