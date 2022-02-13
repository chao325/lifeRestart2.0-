// pages/addsign/addsign.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shuju:{},
    name: '',

  },


  /**
   * 生命周期函数--监听页面加载
   */

  
  confirmPublish: function() {

    var that = this
    const data = {}
    data.name = this.data.name
    data.visitOrganId = this.data.visitOrganId
  
    this.setData({
      shuju:JSON.stringify(data)
    })
    console.log(this.data.shuju,'拿到的数据')


   
  },
})
