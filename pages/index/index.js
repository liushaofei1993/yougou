import request from "../../utils/request.js"
Page({

  data: {
    autoplay: true,
    // 轮播图的数据
    imgUrls: [
      // 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      // 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      // 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    menu:[],
    floorData:[]
  },

  onLoad() {
    request({
      url: "/home/swiperdata"
    }).then(res => {
      console.log(res)
      // 返回的数组
      const { message } = res.data;
      // 修改imgUrls
      this.setData({
        imgUrls: message
      })
    }),

    request({
      url:"/home/catitems"
    }).then(res=>{
      console.log(res)
      const {message} = res.data
      this.setData({
      menu:message
      })
    }),
    
    request({
      url:"/home/floordata"
    }).then(res=>{
      console.log( res)
      const {message} = res.data
      this.setData({
        floorData:message
      })
    })
  }

})
