import { buildSummary, finalSummary } from "../../extension/liferestart/data/dataUtils";
Page({
  data: {
    nickName: '神秘人',
    playNum: 1,
    avatarUrl: ""
  },
  goStart () {
    var that = this;
    this.setData({
      playNum: that.data.playNum += 1

    })
    wx.redirectTo({
      url: '../start/start',
    })

  },
  onLoad: function (options) {
    this.initData()
    this.loadUserInfo()
  },
  initData () {


    const record = wx.getStorageSync('currentRecord')
    let sourceMap = {
      'CHR': '颜值',
      'INT': '智力',
      'STR': '体质',
      'MNY': '家境',
      'SPR': '快乐',
      'AGE': '享年',
      'zong': '总评'
    }
    let source = []
    for (const key in sourceMap) {
      const element = sourceMap[key];
      let obj
      if (key === 'zong') obj = finalSummary(record)
      else obj = buildSummary(record, key)
      obj.name = element
      obj.description = obj.value + ' · ' + obj.judge
      source.push(obj)
    }
    this.setData({
      source
    })
  },
  /**
   * 在这里可以加载用户头像和昵称
   */
  loadUserInfo () {

  },
  onShareAppMessage: function () {

  }
})