// pages/dingzhi/index.js

const app = getApp()

var WxParse = require('../../dist/wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    drop: 'drop', // 头部设置
    topBarLogo: '', // 头部设置
    logo: '', // 头部设置
    logoWhite: '', // 头部设置,

    footer: {}, // 底部数据

    rightMenu: [],
    navTitle: '',
    bannerImage: '',
    bannerTitle: '',

  },

  // 获取数据
  getData: function() {
    let that = this
    this.setData({
      spinShow: true,
    })
    this.scrollTop()
    wx.request({
      url: app.globalData.baseUrl + 'web/index.php?c=account&a=welcome&do=dailiapi',
      data: {
        cid: this.data.categoryAction,
        page: this.data.nowPage
      },
      success(res) {
        console.log(res)
        let dt = res.data.data

        if (res.data.code == 200) {

          console.log(dt)
          that.setData({

            topBarLogo: dt.header.logo[1],
            logo: dt.header.logo[0],
            logoWhite: dt.header.logo[1],
            rightMenu: dt.header.nav,

            bannerImage: dt.banner.daili,
            bannerTitle: dt.banner.dailititle,
            
            market: dt.market,
            gain: dt.gain,
            daili: dt.daili,

            rightMenu: dt.header.nav,
            footer: dt.footer,
            spinShow: false,

            navTitle: dt.title,
          })
          that.setNavTitle()
        }
        WxParse.wxParse('article', 'html', that.data.market.content, that, 5);
      }
    })
  },
  scrollTop: function() { // 滚动到顶部
    // 控制滚动
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  setNavTitle: function() {
    wx.setNavigationBarTitle({
      title: this.data.navTitle,
    })
  },
  footerTo: function(e) { // 底部按钮点击跳转
    let todo = e.currentTarget.dataset.do
    console.log(todo)
    this.selectComponent("#v-header").goto(todo)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})