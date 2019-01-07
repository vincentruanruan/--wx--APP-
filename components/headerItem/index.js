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
    winHeight: {
      type: Infinity,
      value: 0
    },     
    rightMenu: {
      type: Array,
      value: []
    },
    paddingBox:{
      type:Boolean,
      value:true
    }   
  },

  /**
   * 组件的初始数据
   */
  data: {
    showRight: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleRightMenu() {
      this.setData({
        showRight: !this.data.showRight
      });
    }
    
  }
})
