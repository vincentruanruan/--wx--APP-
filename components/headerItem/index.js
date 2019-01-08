// components/headerItem/index.js
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

    backHome: function (complete) {
      wx.navigateBack({
        delta: 999,
        complete: complete
      })
    },

    menuTap: function(e) {

      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2]; //上一个页面
      let currentPage = pages[pages.length - 1];
      let todo = e.currentTarget.dataset.do
      let pg = ''
      console.log(currentPage.route)
      switch (todo) {
        case 'home':
          this.backHome()
          break;
        case 'solve':

          break;
        case 'xiaochengxu':

          break;
        case 'dingzhi':

          break;
        case 'daili':

          break;
        case 'news':
          pg = '/pages/news/index'
          if ('/' + currentPage.route == pg) {
            this.backHome(function() {
              wx.navigateTo({
                url: pg,
              })
            })
          }
          break;
        case 'about':

          pg = '/pages/about/index'
          if ('/' + currentPage.route == pg) {
            this.backHome(function() {
              wx.navigateTo({
                url: pg,
              })
            })
          }
          break;
        case 'contact':

          break;
        case 'help':

          break;
        default:
          break
      }

      this.toggleRightMenu()

    }

  }
})