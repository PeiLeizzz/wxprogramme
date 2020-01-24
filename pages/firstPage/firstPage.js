// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : "",
    tel : "",
    isHidden : true,
    flag : "成功"
  },

  getName:function(e){
    this.setData({
      name : e.detail.value
    })
  },

  getTel:function(e){
    this.setData({
      tel : e.detail.value
    })
  },
  
  goToNewPage: function(){
    if(!this.data.name || !this.data.tel)
    {
      this.setData({ flag: "失败", isHidden: false})
    }
    else
    {
    this.setData({ flag : "成功", isHidden : false}),
    wx.navigateTo({url: '/pages/newPage/newPage?name=' + this.data.name + '&tel=' + this.data.tel})
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})