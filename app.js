App({
  onLaunch: function () {
    try {
      const res = wx.getSystemInfoSync();
      console.log(res);
      this.globalData = res;
    } catch (e) {
      // Do something when catch error
      console.log(e)
    }
  },

  globalData: null,
})