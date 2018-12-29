//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/imgs/banner1.png',
      '/imgs/banner2.png',
      '/imgs/banner3.png'
    ],
    circular: true,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 300,
    indicatorColor: 'rgba(255,255,255,0.5)',
    indicatorActiveColor: '#ffffff',
    bannerHeight: [],
    current: 0,

    server: [{
      url: '/imgs/server1.png',
      title: '微信商城',
      desc: '资深研发团队，提供高品质微信开发服务'
    }, {
      url: '/imgs/server2.png',
      title: '小程序开发',
      desc: '专业技术团队,专业设计流程,全行业定制开发'
    }, {
      url: '/imgs/server3.png',
      title: 'APP开发',
      desc: '专业定制IOS/安卓APP软件，专业APP设计服务'
    }, {
      url: '/imgs/server4.png',
      title: '企业官网',
      desc: '专业定制高端企业网站，专业企业官网设计'
      }],

    develop: [{
      url: '/imgs/develop1.png',
      title: '需求沟通',
      desc: '客户提出需求，进行功能分析，确定功能需求'
    }, {
      url: '/imgs/develop2.png',
      title: '交互设置',
      desc: '根据已确定的需求功能确认原型，UI设计稿'
    }, {
      url: '/imgs/develop3.png',
      title: '技术开发',
      desc: '根据客户需求，完成前后端功能开发'
    }, {
      url: '/imgs/develop4.png',
      title: '发布上架',
      desc: '与客户确定验收无误后发布上架'
    }, {
      url: '/imgs/develop5.png',
      title: '售后跟进',
      desc: '专业售后跟进服务，后续持续跟进客户需求'
      }],

    recommend: [{
      url: '/imgs/case1.png',
      title: '需求沟通',
    }, {
        url: '/imgs/case1.png',
      title: '交互设置',
    }, {
        url: '/imgs/case1.png',
      title: '技术开发',
    }, {
        url: '/imgs/case1.png',
      title: '发布上架',
    }]
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
  imageLoad: function(e) { //获取图片真实宽度  
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
})