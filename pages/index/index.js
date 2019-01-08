//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    winHeight: wx.getSystemInfoSync().windowHeight,


    circular: true, // 轮播设置
    indicatorDots: true, // 轮播设置
    autoplay: true, // 轮播设置
    interval: 5000, // 轮播设置
    duration: 300, // 轮播设置
    indicatorColor: 'rgba(255,255,255,0.5)', // 轮播设置
    indicatorActiveColor: '#ffffff', // 轮播设置
    bannerHeight: [], // 轮播设置
    current: 0, // 轮播设置

    drop: '', // 头部设置
    topBarLogo: '/imgs/logo-white.png', // 头部设置
    logo: '/imgs/logo.png', // 头部设置
    logoWhite: '/imgs/logo-white.png', // 头部设置

    imgUrls: [], //轮播 数据


    serverTitle: '',
    server: [],


    developTitle: '',
    develop: [],


    recommendTitle: '',
    recommendBtns: [],
    recommend: [],
    recommendAction: 0,


    newsTitle: '',
    news: [],

    rightMenu: [{
        title: '首页',
        link: ''
      },
      {
        title: '新闻资讯',
        link: ''
      },
      {
        title: '关于我们',
        link: ''
      },
      {
        title: '联系我们',
        link: ''
      },
    ],

  },
  onLoad: function() {
    let that = this
    wx.request({
      url: app.globalData.baseUrl + 'web/index.php?c=account&a=welcome&do=indexapi',
      success(res) {
        console.log(res)
        let dt = res.data.data
        if (res.data.code == 200) {
          console.log(dt)
          that.setData({
            imgUrls: dt.carouse,

            serverTitle: dt.list.titleourservice,
            server: dt.list.server,

            developTitle: dt.developments.titlekflc,
            develop: dt.developments.developments,

            recommendTitle: dt.cases.titleourservice,
            recommendBtns: dt.cases.casemenu,
            recommend: dt.cases.list,

            newsTitle: dt.news.titlexwzx,
            news: dt.news.news,

          })
        }
      }
    })
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  imageLoad: function(e) { //获取图片真实宽度   轮播
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    // console.log(imgwidth, imgheight)
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.bannerHeight;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      bannerHeight: imgheights
    })
  },
  bindchange: function(e) {
    // console.log(e.detail.current)
    this.setData({
      current: e.detail.current
    })
  },

  onPageScroll: function(e) { // 监听页面滚动 修改头部样式
    // console.log(e); //{scrollTop:99}
    if (e.scrollTop > 20) {
      this.setData({
        topBarLogo: this.data.logo,
        drop: 'drop'
      })
    } else {
      this.setData({
        topBarLogo: this.data.logoWhite,
        drop: ''
      })
    }
  },

  caseTapSwitch: function(e) { // 切换case
    let id = e.currentTarget.dataset.id
    // console.log(id)
    this.setData({
      recommendAction: id
    })
  },
  gotoDesc: function (e) {
    let id = e.currentTarget.dataset.id
    console.log('desc?id=' + id)
    wx.navigateTo({
      url: '../news/desc?id=' + id,
    })
  },


})