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

    footer: {}, // 底部数据\

    keyword: '',

    categorys: [],
    info: {},
    prev: {},
    next: {},
    spinShow: true,

    rightMenu: [],
    navTitle: '',
    bannerImage: '',
    bannerTitle: '',

  },
  keywordChage: function(e) {
    this.setData({
      keyword: e.detail.value
    })

    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面

    if (prevPage.route == 'pages/help/index') {
      prevPage.setData({
        keyword: this.data.keyword
      })
      wx.navigateBack()
    }
  },
  // 获取数据
  getData: function(id) {
    let that = this
    this.scrollTop()
    this.setData({
      spinShow: false,
    })
    wx.request({
      url: app.globalData.baseUrl + 'web/index.php?c=account&a=welcome&do=helpdetailapi',
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


            bannerImage: dt.banner.help,
            bannerTitle: dt.banner.helptitle,

            categorys: dt.categorys,
            info: dt.info,
            prev: dt.prev,
            next: dt.next,
            footer: dt.footer,
            rightMenu: dt.header.nav,
            navTitle: dt.title,
            spinShow: false,
          })
          WxParse.wxParse('article', 'html', that.data.info.content, that, 5);
          that.setNavTitle()
        }
      }
    })
  },
  scrollTop: function() { // 滚动到顶部
    // 控制滚动
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  categorysSwitch: function(e) { //类型切换
    let id = e.currentTarget.dataset.id
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面

    if (prevPage.route == 'pages/help/index') { //如果是新闻页面进入的
      prevPage.setData({
        categorysAction: id
      })
      wx.navigateBack()
    } else { // 不是新闻页面进入的
      wx.redirectTo({
        url: 'index?categorysAction=' + id,
      })
    }
    this.scrollTop()
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
  changeData: function(e) {
    let id = e.currentTarget.dataset.id
    this.getData(id)
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