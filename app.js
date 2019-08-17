import request from "./utils/request.js";
App({
  onLaunch: function () {
    // 设置request的基准路径
    request.defaults.baseURL = "https://api.zbztb.cn/api/public/v1"
  },
  
  // 错误拦截
})