import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data:{
    navs:[
     "大家电", 
     "空调", 
     "冰箱", 
     "洗衣机", 
     "好东西", 
     "电闹办公", 
     "大家电", 
     "空调", 
     "冰箱", 
     "洗衣机", 
     "好东西", 
     "电闹办公", 
     "大家电", 
     "空调", 
     "冰箱", 
     "洗衣机", 
     "好东西", 
     "电闹办公", 
    ],
    current:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    request({
      url:"/categories"
    }).then(res=>{
      console.log(res)
    })
  },
  handleGetBrand(event){
    console.log(event)
    const {index} = event.currentTarget.dataset
    this.setData({
      current:index
    })
  }
  
})