// index.js

Page({
  data: {
    msg: 'Hello World',
    color: "rgba(222,122,22)",
    condition:true,
    count:0,
    text:0
  },
  handclick(e){
    console.log(e);
    this.setData({
      count: this.data.count+ e.target.dataset.num
      
    })
  },
  handinput(e){
    this.setData({
      text: e.detail.value
    }
     
    )
  }
})