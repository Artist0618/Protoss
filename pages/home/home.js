import  {Home} from 'home-model.js';
var home = new Home();
Page({

  data: {

  },
  onLoad:function(){
    this._loadData()
  },

  _loadData:function(){
    var id = 1
    var data = home.getBannerData(id,this.callBack)
  },

  callBack:function(res){
    console.log(res)
  }

})