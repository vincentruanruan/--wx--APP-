// pages/about/index.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    drop: 'drop', // 头部设置
    topBarLogo: '/imgs/logo.png', // 头部设置
    logo: '/imgs/logo.png', // 头部设置
    logoWhite: '/imgs/logo-white.png', // 头部设置,

    bannerImage: '',
    teams: [],
    certs: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.data.desc)
    let that = this
    wx.request({
      url: app.globalData.baseUrl + 'web/index.php?c=account&a=welcome&do=aboutapi',
      success(res) {
        console.log(res)
        let dt = res.data.list

        if (res.data.code == 200) {
          console.log(dt)
          that.setData({
            bannerImage: dt.banner.about,
            teams: dt.teams,
            certs: dt.certs,
          })
        }
      }
    })
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