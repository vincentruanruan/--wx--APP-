// pages/news/desc.js

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

    bannerImage: '',
    newGroup: [], // 新闻类型
    newsAction: 0, //等前选中的类型
    newstj: '', // 推荐新闻

    rightMenu: [],

    spinShow: true, // 加载等待

    title: '',
    datetime: '',
    desc: '',
  },
  scrollTop: function() { // 滚动到顶部
    // 控制滚动
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  updateData: function(e) {
    this.getData(e.currentTarget.dataset.id)
  },
  getData: function(id) {
    this.setData({
      spinShow: true
    })
    this.scrollTop()
    let that = this
    wx.request({
      url: app.globalData.baseUrl + 'web/index.php?c=account&a=welcome&do=newsdetailapi',
      data: {
        id: id
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

            newGroup: dt.categorts,
            bannerImage: dt.banner.news,
            desc: dt.info.content,
            title: dt.info.title,
            datetime: dt.info.addtime,
            newstj: dt.newstj,
            rightMenu: dt.header.nav,
            footer: dt.footer,
            spinShow: false
          })
        }
        WxParse.wxParse('article', 'html', that.data.desc, that, 5);
        
      }
    })
  },

  newTapSwitch: function(e) { //新闻类型切换
    let id = e.currentTarget.dataset.id
    // console.log(id)
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面
    // console.log(prevPage.route)
    // pages / news / index

    if (prevPage.route == 'pages/news/index') { //如果是新闻页面进入的
      prevPage.setData({
        newsAction: id
      })
      wx.navigateBack()
    } else { // 不是新闻页面进入的
      wx.redirectTo({
        url: 'index?newsAction=' + id,
      })
    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData(options.id)

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