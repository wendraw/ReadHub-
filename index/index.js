const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    // wx.request({
    //   url: 'https://api.readhub.cn/topic',
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
  },

  handlerLeftIconPress(e) {
    console.log(e)
  }
})