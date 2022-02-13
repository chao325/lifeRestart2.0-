// pages/addsign/addsign.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shuju:'',
    name: '',

  },


  /**
   * 生命周期函数--监听页面加载
   */

  setInput: function(e) {
    const {
      name
    } = e.target.dataset
    this.data[name] = e.detail.value

    this.setData(this.data)
  },
  confirmPublish: function() {

    var that = this
    const data = {}
    data.name = this.data.name
  
    this.setData({
      shuju:data.name
    })
    console.log(this.data.shuju,'拿到的数据')
    console.log(data.name,'拿到的数据')

    if (data.name =='zcsuper') {
      wx.showToast({
        icon:'none',
        title: '密匙正确'
      })
      wx.redirectTo({
        url: '../../PageA/pages/event/event?event=kaishi',
      })
    }else{
      wx.showToast({
        icon:'error',
        title: '输入密匙错误！'
      })
    }


   
  },
})
