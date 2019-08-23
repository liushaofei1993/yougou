import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    keyword:"",
    goods:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 假设关键字是电视
    let keyword ="小米"
    request({
      url:"/goods/search?query=" + keyword ,

    }).then(res=>{
      console.log(res)
      const {goods} = res.data.message
      const newGoods = goods.map(v=>{
        v.decimal_price = Number(v.goods_price).toFixed(2)
        return v
      })
      this.setData({
        goods:newGoods,
        keyword
      })
    })
  },

  // 点击tab栏
  handleClick(event) {
    // console.log(event)
    const { index } = event.currentTarget.dataset
    this.setData({
      current: index
    })
  },
})