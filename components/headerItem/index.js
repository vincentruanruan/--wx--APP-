// components/headerItem/index.js

const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

    logo: {
      type: String,
      value: ''
    },
    drop: {
      type: String,
      value: ''
    },
    rightMenu: {
      type: Array,
      value: []
    },
    paddingBox: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showRight: false,
    winHeight: wx.getSystemInfoSync().windowHeight,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleRightMenu() {
      this.setData({
        showRight: !this.data.showRight
      });
    },

    backHome: function(complete) { // 跳转 （返回首页，回调 进行跳转）
      let pages = getCurrentPages();
      let currentPage = pages[pages.length - 1];
      let pg = '/pages/index/index'
      if ('/' + currentPage.route == pg) {
        // console.log(11111)
        complete()
      } else {
        // console.log(22222)
        wx.navigateBack({
          delta: 999,
          success: complete
        })
      }
    },

    menuTap: function(e) {
      let todo = e.currentTarget.dataset.do
      // console.log('header --- ' + todo)
      this.goto(todo)
      this.toggleRightMenu()
    },

    goto: function(todo) {
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2]; //上一个页面
      let currentPage = pages[pages.length - 1];

      let pg = ''
      // console.log(currentPage.route)
      switch (todo) {
        case 'home':
          // this.backHome(null)
          pg = '/pages/index/index'
          break;
        case 'solve':
          pg = '/pages/solve/index'
          break;
        case 'xiaochengxu':
          pg = '/pages/xiaochengxu/index'
          break;
        case 'dingzhi':
          pg = '/pages/dingzhi/index'
          break;
        case 'daili':
          pg = '/pages/daili/index'
          break;
        case 'news':
          pg = '/pages/news/index'
          break;
        case 'about':
          pg = '/pages/about/index'
          break;
        case 'contact':
          pg = '/pages/contact/index' // 未完成
          break;
        case 'help':
          pg = '/pages/help/index' // 未完成
          break;
        default:
          break
      }

      if ('/' + currentPage.route != pg) { // 当前页面不进行跳转
        this.backHome(function() {
          if (pg != '/pages/index/index') { // 返回首页不执行回调
            wx.navigateTo({
              url: pg,
            })
          }

        })
      }

      
    }

  },
})