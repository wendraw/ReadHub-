const app = getApp()

Page({
  data: {

  },
  onLoad: function () {},

  handleLeftIconPress(e) {
    console.log(e)
  },

  handleSearchTap(e) {
    wx.navigateTo({
      url: '/search-page/search-page',
    })
  }
})