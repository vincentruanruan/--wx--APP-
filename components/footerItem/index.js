// components/footerItem/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    footer: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    qrcode: '/imgs/wxqrcode.jpg',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scrollTop: function () { // 滚动到顶部
      // 控制滚动
      wx.pageScrollTo({
        scrollTop: 0
      })
    },
    call:function(e){
      let tel = e.currentTarget.dataset.tel
      wx.makePhoneCall({
        phoneNumber: tel 
      })
    }
  }
})