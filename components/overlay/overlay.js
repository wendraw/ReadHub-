// components/overlay/overlay.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: Boolean,
    zIndex: {
      type: Number,
      value: 5555
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick() {
      this.triggerEvent("OverlayClick");
    }
  }
})