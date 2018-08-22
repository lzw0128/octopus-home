const app = getApp()

Page({
  data: {
    navbar: ['精选商品', '最新作品', '用户晒单'],
    currentTab: 0
  },
  onLoad: function () {
    
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})
