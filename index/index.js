const app = getApp()

Page({
  data: {
    topics: [{
      "title": "星星充电获得8.55亿元A轮融资，中金资本旗下基金和施耐德电气领投",
      "summary": "9月22日，星星充电（万帮数字能源股份有限公司）宣布获得8.55亿元人民币A轮融资，这是星星充电首次启动社会化融资 ... 本轮A轮融资由中金资本旗下基金和施耐德电气领投，建银国际、国创中鼎、上海国和、武进高新区平台公司等跟投，摩根士丹利担任独家财务顾问。",
      "newsArray": [{
        "id": 2990564,
        "url": "https://www.36kr.com/p/894300110680837",
        "title": "星星充电获得8.55亿元A轮融资，中金资本旗下基金和施耐德电气领投",
        "siteName": "36Kr",
        "mobileUrl": "https://www.36kr.com/p/894300110680837",
        "autherName": null,
        "duplicateId": 2,
        "publishDate": "2020-09-23T10:08:47.972Z",
        "language": "zh-cn",
        "hasInstantView": true,
        "statementType": 1
      }],
    }],
    subscribed: false,

    settingViewX: null,
    settingViewY: null,
    settingViewShow: false,
  },
  onLoad: function () {},

  handleSettingIconTap(e) {
    console.log(e);
    this.setData({
      settingViewX: e.touches[0].clientX,
      settingViewY: e.touches[0].clientY,
      settingViewShow: !this.data.settingViewShow,
    })
  },

  handleSearchTap(e) {
    // wx.navigateTo({
    //   url: '/search-page/search-page',
    // })
  },

  handleSubscribeTap(e) {
    this.setData({
      subscribed: !this.data.subscribed
    }, () => {
      if (this.data.subscribed) {
        wx.showToast({
          title: '已订阅，将于明早发送',
          icon: 'none',
          duration: 2000
        })
      } else {
        wx.showToast({
          title: '已取消订阅',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  handleCardTap(e) {
    console.log("handleCardTap", e)
  },

  handleShareTap(e) {
    console.log("handleShareTap", e);
  },

  onOverlayClick() {
    this.setData({
      settingViewShow: false
    })
  },

  handleSettingItemTap(e) {
    console.log("handleSettingItemTap", e)
  }
})