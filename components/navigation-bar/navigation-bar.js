Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    iconName: String, // https://developers.weixin.qq.com/miniprogram/dev/extended/weui/icon.html 支持的所有值
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    color: '#000',
    background: '#f5f5f5',
    show: true,
    animated: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeftIconPess() {
      this.triggerEvent('LeftIconPress')
    }
  }
})