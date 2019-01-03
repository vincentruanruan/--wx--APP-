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
    
    topBarLogo: '/imgs/logo-white.png',
    logo: '/imgs/logo.png',
    logoWhite: '/imgs/logo-white.png',
    drop:'',
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
    }],

    news: [{
      year: '2019',
      month: '01-30',
      title: '微信朋友圈广告值得投吗？效果如何？',
      desc: '就在你每天必用的微信。微信已成为现代生活的一部分，浏览新闻、深度阅读、聊天、支付等都用少不了它。可以这样理解：微信是随身携带的电视、报纸、电话的结合升级体。2017年第三季度，微信已覆盖中国95%以上的智能手机用户。也就是说：微信比当时电视的触达率还要高。'
    }, {
      year: '2019',
      month: '01-30',
      title: '广州商城APP，小程序商城开发公司哪家好？从这6点判断',
      desc: '互联网的快速发展冲击着传统企业与商家的同时，也为企业带来了新的发展机遇，让各行各业在市场占有率方面有了重新洗牌的契机。为抓住互联网带来的机遇，不管是曾经的行业大头还是新兴小企业纷纷通过广州商城APP开发与中山小程序商城开发布局互联网市场。'
    }, {
      year: '2019',
      month: '01-30',
      title: '来亿科技浅谈商业直播APP开发',
      desc: '火热的直播APP开发把直播行业发展弄得有声有色，商业变现也变得多种多样，盈利模式不再单一。直播app现在的模式有很多种，直播+电商+游戏+教育+旅游……一系列的内容模式改变了粉丝主导经济的局面，转变成为内容主导局面。接下来广州来亿信息科技有限公司小编来和大家一起谈谈这个问题。'
    }],
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
  onPageScroll: function(e) {
    // console.log(e); //{scrollTop:99}
    if (e.scrollTop > 20) {
      this.setData({
        topBarLogo: this.data.logo,
        drop:'drop'
      })
    } else {
      this.setData({
        topBarLogo: this.data.logoWhite,
        drop: ''
      })
    }
  }
})