// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    color: "#7f7f7f"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTouchStart() {
      this.setData({
        color: "#999999"
      })
    },

    handleTouchEnd() {
      this.setData({
        color: "#7f7f7f"
      })
      this.triggerEvent("Tap")
    }
  }
})