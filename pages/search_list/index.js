import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    keyword:"",
    goods:[],
    pagenum:1,
    pagesize:10
  },

  // 点击tab栏
  handleClick(event) {
    // console.log(event)
    const { index } = event.currentTarget.dataset
    this.setData({
      current: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 假设关键字是电视
    // let keyword ="小米"

    // 获取点击时传过来的参数(options相当于this.$router.query.)赋值给变量keyword
    this.setData({
      keyword: options.keyword
    })

    this.getData()
  },


  // 封装请求分页数据的功能
  getData(){
    const { keyword, pagenum, pagesize } = this.data 
    // 收集参数
    const data = {
      query: keyword,
      pagenum,
      pagesize
    }
    // 请求数据
    request({
      // url:"/goods/search?query=" + options.keyword ,
      url: "/goods/search",
      data,
    }).then(res => {
      console.log(res)
      const { goods } = res.data.message
      const newGoods = goods.map(v => {
        v.decimal_price = Number(v.goods_price).toFixed(2)
        return v
      })

      this.setData({
        // 合并新旧的数据
        goods:[...this.data.goods,...newGoods]
      })
    })
  },

  // 到底时加载下一页
  onReachBottom(){
    const {pagenum} = this.data
    this.setData({
      pagenum : pagenum+1
    })
    this.getData()
  }

})