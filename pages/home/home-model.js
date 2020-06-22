class Home{
  constructor(){

  }

  getBannerData(id,callBack){
    wx,wx.request({
      url: 'http://zerg/api/v1/banner/' + id,
      method:'GET',
      success:function(res){
        callBack(res)
      }
    })
  }
}
export {Home};