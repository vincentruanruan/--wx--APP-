// pages/news/desc.js

const app = getApp()

var WxParse = require('../../dist/wxParse/wxParse.js');

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
    newGroup: [], // 新闻类型
    newsAction: 0, //等前选中的类型
    newsList: [], //新闻列表
    
    title:'标题标题',
    datetime:'2018-01-01',
    desc:'<h1>详情</h1><h4>内容111111111111</h4><h4>内容111111111111</h4><h4>内容111111111111</h4><h4>内容111111111111</h4>',
  },

  newTapSwitch: function(e) { //新闻类型切换
    let id = e.currentTarget.dataset.id
    // console.log(id)
    this.setData({
      newsAction: id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.data.desc)
    let that = this
    wx.request({
      url: app.globalData.baseUrl + 'web/index.php?c=account&a=welcome&do=newsapi',
      success(res) {
        console.log(res)
        let dt = res.data.data
        
        if (res.data.code == 200) {
          console.log(dt)
          that.setData({
            newGroup: dt.categorys,
            newsList: dt.lists,
            bannerImage: dt.banner.news
          })
        }
        WxParse.wxParse('article', 'html', that.data.desc, that, 5);
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