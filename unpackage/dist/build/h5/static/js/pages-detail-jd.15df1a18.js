(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-jd"],{"17e6":function(e,t,i){"use strict";var o=i("5fca"),a=i.n(o);a.a},"2bab":function(e,t,i){"use strict";i.r(t);var o=i("cc57"),a=i.n(o);for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);t["default"]=a.a},"5fca":function(e,t,i){var o=i("ef73");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("4f06").default;a("985b1b6c",o,!0,{sourceMap:!1,shadowMode:!1})},"9b02":function(e,t,i){"use strict";i.r(t);var o=i("ea45"),a=i("2bab");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("17e6");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"73e05956",null,!1,o["a"],s);t["default"]=r.exports},cc57:function(e,t,i){"use strict";var o=i("ee27");i("99af"),i("7db0"),i("c740"),i("4160"),i("d81d"),i("a434"),i("b680"),i("acd8"),i("e25e"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var a=o(i("c964")),n=o(i("f759")),s=i("01aa"),c=o(i("5b05")),r={data:function(){return{id:"",relation_id:"",grade:0,swiperList:[],cashBack:"",highestCashBack:"",goods:{},recommendList:[],isBackTop:!1,isNavigatorBox:!0,collectName:"收藏",isActiveCollect:!1,goodsItem:{},poster:{},qrShow:!1,canvasId:"default_PosterCanvasId",model:!1}},onLoad:function(e){this.redirect(e),this.collect()},onPageScroll:function(e){this.isBackTop=e.scrollTop>500},onNavigationBarButtonTap:function(e){this.isNavigatorBox=!this.isNavigatorBox},components:{simpleModel:c.default},methods:{goLogin:function(){var e=this.$queue.getStorageData("token");e?uni.showToast({icon:"none",title:"功能暂未完成"}):uni.navigateTo({url:"../login/login"})},addBrowseHistory:function(){var e=this,t=this.$queue.getStorageData("jdBrowseList")||[],i=t.find((function(t){return t.itemid===e.goodsItem.itemid}));i||(t.push(this.goodsItem),t.length>100&&t.splice(0,1),this.$queue.setStorageData("jdBrowseList",t))},collect:function(){var e=this,t=this.$queue.getStorageData("jdCollect")||[],i=t.findIndex((function(t){return t.itemid==e.id}));-1!==i&&(this.collectName="已收藏",this.isActiveCollect=!0)},redirect:function(e){e.id?(this.id=e.id,this.relation_id=e.relation_id,this.getGoodsInfo()):uni.switchTab({url:"/pages/index/index"})},getGoodsInfo:function(){var e=this,t="/tao/jd/goods/".concat(this.id);this.$request(t).then((function(t){var i=t.data.data.list[0];console.log(i),e.swiperList=i.imageInfo.imageList.map((function(e){return e.url})),i.itempic=i.imageInfo.imageList[0].url,i.shoptype="D",i.itemtitle=i.skuName,i.itemprice=i.priceInfo.lowestPrice,i.tkmoney=i.commissionInfo.couponCommission.toFixed(2),i.itemendprice=i.priceInfo.lowestCouponPrice,i.itemsale=i.inOrderCount30Days,i.couponmoney=(i.itemprice-i.itemendprice).toFixed(0),i.shopname=i.shopInfo.shopName,i.itemid=i.skuId,i.start_time=i.couponInfo.couponList[0].getStartTime,i.end_time=i.couponInfo.couponList[0].getEndTime,i.couponLink=i.couponInfo.couponList[0].link,i.itemdesc=i.skuName,e.grade=e.$queue.getStorageData("grade"),e.grade?e.cashBack=i.tkmoney*parseFloat(grade).toFixed(2):e.cashBack=(.3*i.tkmoney).toFixed(2),e.highestCashBack=(.7*i.tkmoney).toFixed(2),e.goods=i,e.goodsItem={img:e.goods.itempic,shoptype:e.goods.shoptype,title:e.goods.itemtitle,price:e.goods.itemprice,sales:e.goods.itemsale,coupon:e.goods.couponmoney,cashback:e.goods.tkmoney,shopname:e.goods.shopname,itemid:e.goods.itemid},e.addBrowseHistory()}))},getRecommendGoods:function(){var e=this,t="/api/get_similar_info/apikey/maxd/itemid/".concat(this.id);this.$request(t).then((function(t){var i=t.data.data;i.forEach((function(t){t.tkmoney=(t.itemendprice*(.01*t.tkrates)*e.grade).toFixed(2)})),e.recommendList=i}))},handleBackTop:function(){uni.pageScrollTo({scrollTop:0,duration:500})},goHome:function(){uni.switchTab({url:"/pages/index/index"})},clickCollect:function(){var e=this,t=this.$queue.getStorageData("token");if(t||uni.navigateTo({url:"../login/login"}),t){var i=this.$queue.getStorageData("jdCollect")||[];console.log(i);var o=i.findIndex((function(t){return t.itemid==e.id}));console.log(o),-1===o?(i.push(this.goodsItem),console.log("不存在收藏添加",i),this.isActiveCollect=!0,this.collectName="已收藏",this.$queue.setStorageData("jdCollect",i)):(i.splice(o,1),console.log("存在收藏删除",i),this.isActiveCollect=!1,this.collectName="收藏",this.$queue.setStorageData("jdCollect",i))}},shareFc:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n.default.log("准备生成:"+new Date),t.next=4,(0,s.getSharePoster)({type:"testShareType",posterCanvasId:e.canvasId,background:{width:1e3,height:1500,backgroundColor:"#fff"},drawArray:function(t){var i=t.bgObj,o=(t.type,t.bgScale,.045*i.width);return[{type:"image",url:e.goodsItem.img,dx:20,dy:20,dWidth:960,dHeight:960},{type:"text",text:e.goodsItem.title,size:o,color:"#000",dx:20.5,dy:1000.5+o,lineFeed:{maxWidth:980,lineHeight:1.2*o},textBaseline:"middle"},{type:"text",text:"券后价 ￥".concat((e.goodsItem.price-e.goodsItem.coupon).toFixed(2)," "),size:1.2*o,color:"#e5312f",dx:20.5,dy:1230.5,textAlign:"left",textBaseline:"bottom"},{type:"text",text:e.goodsItem.price,size:.8*o,color:"#999",dx:400.5,dy:1220.5,textAlign:"left",textBaseline:"bottom",lineThrough:{width:o/20,style:"#999"}},{type:"text",text:"省钱兄精选好物",size:1*o,dx:20.5,dy:1350.5,textAlign:"left",textBaseline:"bottom"},{type:"text",text:"长按或扫描识别二维码领券",size:.8*o,dx:20.5,dy:1420.5,color:"#999",textAlign:"left",textBaseline:"bottom"},{type:"qrcode",text:"https://www.gomyorder.cn/pages/detail/pdd?itemid=6933476339",size:250,dx:720.5,dy:1200.5}]},setCanvasWH:function(t){var i=t.bgObj;t.type,t.bgScale;e.poster=i}});case 4:i=t.sent,n.default.log("海报生成成功, 时间:"+new Date+"， 临时路径: "+i.poster.tempFilePath),e.poster.finalPath=i.poster.tempFilePath,e.qrShow=!0,t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](0),n.default.hideLoading(),n.default.showToast(JSON.stringify(t.t0)),console.log(JSON.stringify(t.t0));case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))()},saveImage:function(){n.default.showToast("保存了")},share:function(){n.default.showToast("分享了")},hideQr:function(){this.qrShow=!1},handleClickModel:function(){this.model=!this.model},handleClickButton:function(){}},filters:{formatNumber:function(e){return e>9999&&(e=parseFloat(e/1e4).toFixed(2)+"万"),e},formatDate:function(e){e=parseInt(e);var t,i,o,a=new Date(e);return t=a.getFullYear(),i=a.getMonth()+1,i=i<10?"0".concat(i):i,o=a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),"".concat(t,"-").concat(i,"-").concat(o)}}};t.default=r},ea45:function(e,t,i){"use strict";var o={backTop:i("4a58").default,simpleModel:i("5b05").default},a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.goodsItem.img?o("v-uni-view",{staticClass:"goods-detail"},[o("v-uni-view",{staticClass:"swiper-wrap"},[o("v-uni-swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3,circular:!0,"indicator-active-color":"rgb(252, 63, 120)"}},[e._l(e.swiperList,(function(e){return[o("v-uni-swiper-item",[o("v-uni-image",{attrs:{src:e,mode:"aspectFill"}})],1)]}))],2),o("v-uni-view",{staticClass:"share-wrap"},[o("v-uni-view",{staticClass:"poster",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shareFc()}}},[o("v-uni-text",{staticClass:"iconfont icon-poster"}),e._v("生成海报")],1),o("v-uni-view",{staticClass:"share",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClickModel.apply(void 0,arguments)}}},[o("v-uni-text",{staticClass:"iconfont icon-share"}),e._v("分享好友")],1)],1)],1),o("v-uni-view",{staticClass:"member"},[e.relation_id&&.7===e.grade?o("v-uni-view",{staticClass:"join"},[o("v-uni-text",{staticClass:"join-info"},[e._v("已成为高级会员，预估返现￥ "+e._s(e.cashBack)+"元")])],1):e.relation_id&&.7!==e.grade?o("v-uni-view",{staticClass:"join"},[o("v-uni-text",{staticClass:"join-info"},[e._v("预估返￥ "+e._s(e.cashBack)+"元，升级最高返￥ "+e._s(e.highestCashBack)+"元")]),o("v-uni-view",{staticClass:"join-button"},[e._v("立即升级"),o("v-uni-text",{staticClass:"iconfont icon-right"})],1)],1):o("v-uni-view",{staticClass:"join"},[o("v-uni-text",{staticClass:"join-info"},[e._v("成为会员最高可返现金￥"+e._s(e.highestCashBack)+"元")]),o("v-uni-view",{staticClass:"join-button"},[e._v("立即加入"),o("v-uni-text",{staticClass:"iconfont icon-right"})],1)],1)],1),e.goods.shopname?o("v-uni-view",{staticClass:"goods-info"},[o("v-uni-view",{staticClass:"goods-title"},["B"===e.goods.shoptype?o("v-uni-image",{attrs:{src:i("72ed").replace(/^\./,""),mode:"widthFix"}}):o("v-uni-image",{attrs:{src:i("96ff").replace(/^\./,""),mode:"widthFix"}}),o("v-uni-text",{staticClass:"shopname"},[e._v("【"+e._s(e.goods.shopname)+"】")]),o("v-uni-text",{staticClass:"itemtitle"},[e._v(e._s(e.goods.itemtitle))])],1),o("v-uni-view",{staticClass:"goods-price"},[o("v-uni-view",{staticClass:"goods-price-left"},[e._v("券后价￥"),o("v-uni-text",{staticClass:"itemendprice"},[e._v(e._s(e.goods.itemendprice))]),o("v-uni-text",{staticClass:"itemprice"},[e._v("￥"+e._s(e.goods.itemprice))])],1),o("v-uni-view",{staticClass:"goods-price-right"},[e._v(e._s(e.goods.itemsale)+"人付款")])],1)],1):e._e(),o("v-uni-view",{staticClass:"coupon-wrap bar",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goLogin.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"coupon"},[e.goods.couponmoney&&e.goods.start_time?o("v-uni-view",{staticClass:"coupon-left"},[o("v-uni-view",{staticClass:"coupon-number"},[e._v(e._s(e.goods.couponmoney)+"元优惠券")]),o("v-uni-view",{staticClass:"coupon-date"},[e._v("使用期限: "+e._s(e._f("formatDate")(e.goods.start_time))+" 至 "+e._s(e._f("formatDate")(e.goods.end_time)))])],1):o("v-uni-view",{staticClass:"coupon-left"},[o("v-uni-view",{staticClass:"coupon-number"},[e._v("优惠券已被抢光")])],1),o("v-uni-view",{staticClass:"coupon-right"},[e._v(e._s(e.goods.couponmoney&&e.goods.start_time?"立即抢券":"原价购买"))])],1)],1),o("v-uni-view",{staticClass:"goods-desc bar"},[o("v-uni-view",{staticClass:"left"},[e._v("必买理由")]),o("v-uni-view",{staticClass:"right"},[e._v(e._s(e.goods.itemdesc))])],1),o("v-uni-view",{staticClass:"goods-imgs"},[o("v-uni-text",[e._v("宝贝详情")]),e._l(e.swiperList,(function(e){return[o("v-uni-image",{key:e+"_0",attrs:{src:e,mode:"widthFix"}})]}))],2),o("v-uni-view",{staticClass:"goods-pay"},[o("v-uni-view",{staticClass:"pay-left"},[o("v-uni-view",{staticClass:"home"},[o("v-uni-text",{staticClass:"iconfont icon-home"}),o("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goHome.apply(void 0,arguments)}}},[e._v("首页")])],1),o("v-uni-view",{staticClass:"collect",class:{"active-collect":e.isActiveCollect},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickCollect.apply(void 0,arguments)}}},[o("v-uni-text",{staticClass:"iconfont icon-collect"}),o("v-uni-view",[e._v(e._s(e.collectName))])],1)],1),o("v-uni-view",{staticClass:"pay-right"},[o("v-uni-view",{staticClass:"pay-cashback",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goLogin.apply(void 0,arguments)}}},[e._v("返现 ￥"+e._s(e.cashBack))]),o("v-uni-view",{staticClass:"pay-coupon",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goLogin.apply(void 0,arguments)}}},[e._v("领￥"+e._s(e.goods.couponmoney)+" 券购买")])],1)],1),o("back-top",{attrs:{active:e.isBackTop},on:{backtop:function(t){arguments[0]=t=e.$handleEvent(t),e.handleBackTop.apply(void 0,arguments)}}}),o("v-uni-view",{staticClass:"navigatorBox",class:{"navigatorBox-hide":e.isNavigatorBox}},[o("v-uni-navigator",{staticClass:"navigatorBox-item",attrs:{url:"/pages/index/index","open-type":"switchTab"}},[o("v-uni-text",{staticClass:"iconfont icon-home"}),o("v-uni-view",[e._v("返回首页")])],1),o("v-uni-navigator",{staticClass:"navigatorBox-item",attrs:{url:"/pages/search/search-content"}},[o("v-uni-text",{staticClass:"iconfont icon-search"}),o("v-uni-view",[e._v("超级搜索")])],1),o("v-uni-navigator",{staticClass:"navigatorBox-item",attrs:{url:"/pages/member/footprint"}},[o("v-uni-text",{staticClass:"iconfont icon-jiaoyin"}),o("v-uni-view",[e._v("我的足迹")])],1),o("v-uni-navigator",{staticClass:"navigatorBox-item",attrs:{url:"/pages/member/user","open-type":"switchTab"}},[o("v-uni-text",{staticClass:"iconfont icon-collect"}),o("v-uni-view",[e._v("个人中心")])],1)],1),o("v-uni-view",{staticClass:"poster-content"},[o("v-uni-view",{staticClass:"flex_row_c_c modalView",class:e.qrShow?"show":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideQr()}}},[o("v-uni-view",{staticClass:"flex_column"},[o("v-uni-view",{staticClass:"backgroundColor-white padding1vh border_radius_10px"},[o("v-uni-image",{staticClass:"posterImage",attrs:{src:e.poster.finalPath||"",mode:"widthFix"}})],1),o("v-uni-view",{staticClass:"flex_row marginTop2vh"})],1)],1),o("v-uni-view",{staticClass:"hideCanvasView"},[o("v-uni-canvas",{staticClass:"hideCanvas",style:{width:(e.poster.width||10)+"px",height:(e.poster.height||10)+"px"},attrs:{"canvas-id":"default_PosterCanvasId"}})],1)],1),e.model?o("simple-model",{on:{clickModel:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClickModel.apply(void 0,arguments)},clickModelButton:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClickButton.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"model-cotent"},[o("v-uni-view",[e._v(e._s(e.goodsItem.title))]),o("v-uni-view",[e._v("【在售价】"+e._s(e.goodsItem.price)+"元")]),o("v-uni-view",[e._v("【券后价】"+e._s((e.goodsItem.price-e.goodsItem.coupon).toFixed(2))+"元")]),o("v-uni-view",[e._v("复製此信息进入【手机Tao宝】即可查看并下单￥86Bi1BmAvzd￥")]),o("v-uni-view",[e._v("【必买理由】"+e._s(e.goods.itemdesc)+"元")])],1)],1):e._e()],1):e._e()},n=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return o}))},ef73:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-73e05956]{background-color:#fff;position:relative}.bar[data-v-73e05956]{position:relative;margin-bottom:%?25?%}.bar[data-v-73e05956]::after{content:"";height:%?25?%;width:100%;background-color:#f8f8f8;position:absolute;bottom:%?-25?%}.swiper-wrap[data-v-73e05956]{position:relative;height:%?750?%}.swiper-wrap uni-swiper[data-v-73e05956]{height:100%}.swiper-wrap uni-image[data-v-73e05956]{height:%?750?%}.join[data-v-73e05956]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?90?%;line-height:%?90?%;padding:0 %?30?%;background-color:rgba(0,0,0,.7);font-weight:600}.join .join-info[data-v-73e05956]{color:#ffd465}.join .join-button[data-v-73e05956]{height:%?60?%;line-height:%?60?%;padding:0 %?20?%;border-radius:%?30?%;background-image:-webkit-linear-gradient(left,#f9e6af,#ffd465);background-image:linear-gradient(90deg,#f9e6af,#ffd465)}.goods-info[data-v-73e05956]{padding:%?20?% %?20?%}.goods-info .goods-title[data-v-73e05956]{font-weight:600;line-height:%?42?%}.goods-info .goods-title uni-image[data-v-73e05956]{display:inline-block;width:%?28?%;height:%?28?%;position:relative;top:%?6?%}.goods-info .goods-title .shopname[data-v-73e05956]{color:#db0011;padding:0 %?4?%}.goods-info .goods-price[data-v-73e05956]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?25?% 0}.goods-info .goods-price .goods-price-left[data-v-73e05956]{color:#db0011}.goods-info .goods-price .goods-price-left .itemendprice[data-v-73e05956]{font-size:%?46?%;font-weight:600;color:#f15b6c;padding:0 %?16?% 0 %?4?%}.goods-info .goods-price .goods-price-left .itemprice[data-v-73e05956]{color:#999;font-size:%?24?%;text-decoration:line-through}.coupon[data-v-73e05956]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-shadow:%?0?% %?4?% %?24?% 0 rgba(0,0,0,.2);color:#fff;height:%?150?%;margin:0 %?20?%;background-image:-webkit-linear-gradient(left,#f15b6c,#f15b6c);background-image:linear-gradient(90deg,#f15b6c,#f15b6c);border-radius:%?15?%;position:relative}.coupon[data-v-73e05956]::before, .coupon[data-v-73e05956]::after{content:"";width:%?40?%;height:%?40?%;border-radius:50%;background-color:currentColor;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.coupon[data-v-73e05956]::before{left:%?-20?%}.coupon[data-v-73e05956]::after{right:%?-20?%}.coupon .coupon-left[data-v-73e05956]{-webkit-box-flex:5;-webkit-flex:5;flex:5;margin-left:%?20?%;text-align:center}.coupon .coupon-left .coupon-number[data-v-73e05956]{font-size:%?40?%;margin-bottom:%?10?%;font-weight:600}.coupon .coupon-left .coupon-date[data-v-73e05956]{font-size:%?24?%}.coupon .coupon-right[data-v-73e05956]{text-align:center;margin-right:%?20?%;-webkit-box-flex:3;-webkit-flex:3;flex:3;font-size:%?32?%;font-weight:600}.coupon-wrap[data-v-73e05956]{padding-bottom:%?40?%}.goods-desc[data-v-73e05956]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% %?20?%}.goods-desc .left[data-v-73e05956]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#db0011}.goods-desc .right[data-v-73e05956]{-webkit-box-flex:4;-webkit-flex:4;flex:4;font-size:%?24?%;line-height:%?44?%;color:#999}.goods-imgs[data-v-73e05956]{text-align:center;font-size:%?32?%;line-height:%?80?%;margin-bottom:%?90?%}.recommend-wrap[data-v-73e05956]{background-color:#f0f0f0}.recommend-wrap .recommend-title[data-v-73e05956]{line-height:%?90?%;text-align:center;color:#db0011;font-size:%?42?%}.recommend-wrap .recommend[data-v-73e05956]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.recommend-wrap .recommend .goods-item[data-v-73e05956]{width:50%}.goods-pay[data-v-73e05956]{height:%?90?%;position:fixed;bottom:0;left:0;right:0;z-index:99;zoom:1;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;box-shadow:%?4?% 0 %?12?% 0 rgba(0,0,0,.1)}.goods-pay .pay-left[data-v-73e05956]{-webkit-box-flex:2;-webkit-flex:2;flex:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;font-size:%?24?%}.goods-pay .pay-left .home[data-v-73e05956],\r\n.goods-pay .pay-left .collect[data-v-73e05956]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-pay .pay-left .iconfont[data-v-73e05956]{font-size:%?36?%}.goods-pay .pay-left .active-collect[data-v-73e05956]{color:#db0011}.goods-pay .pay-right[data-v-73e05956]{-webkit-box-flex:5;-webkit-flex:5;flex:5;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff}.goods-pay .pay-right .pay-cashback[data-v-73e05956],\r\n.goods-pay .pay-right .pay-coupon[data-v-73e05956]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;padding:%?15?% 0}.goods-pay .pay-right .pay-cashback[data-v-73e05956]{background-color:#db0011;border-radius:%?30?%;margin:0 %?10?% 0 %?20?%}.goods-pay .pay-right .pay-coupon[data-v-73e05956]{background-color:#db0011;border-radius:%?30?%;margin:0 %?20?% 0 %?10?%}.navigatorBox[data-v-73e05956]{position:fixed;z-index:109;zoom:1;top:%?110?%;right:%?20?%;width:%?280?%;height:%?400?%;border-radius:%?30?%;background-color:rgba(58,58,58,.8);color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;overflow:hidden;-webkit-transition:all .5s ease 0s;transition:all .5s ease 0s}.navigatorBox .navigatorBox-item[data-v-73e05956]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 %?30?%;padding:%?30?% 0;border-bottom:%?1?% solid #868583}.navigatorBox .navigatorBox-item .iconfont[data-v-73e05956]{padding-right:%?18?%;font-size:%?38?%}.navigatorBox-hide[data-v-73e05956]{right:%?-400?%;opacity:0}.share-wrap[data-v-73e05956]{position:absolute;right:0;top:%?600?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:%?120?%}.share-wrap .poster[data-v-73e05956],\r\n.share-wrap .share[data-v-73e05956]{background-color:rgba(58,58,58,.8);height:%?50?%;line-height:%?50?%;padding:0 %?10?% 0 %?20?%;border-radius:%?25?% 0 0 %?25?%}.share-wrap .poster .iconfont[data-v-73e05956],\r\n.share-wrap .share .iconfont[data-v-73e05956]{padding:0 %?10?% 0 0}.poster-content[data-v-73e05956]{width:100vw}.hideCanvasView[data-v-73e05956]{position:relative}.hideCanvas[data-v-73e05956]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}.flex_row_c_c[data-v-73e05956]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.modalView[data-v-73e05956]{width:100%;height:100%;position:fixed;top:0;left:0;right:0;bottom:0;opacity:0;outline:0;-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-perspective:%?2500?%;perspective:%?2500?%;background:rgba(0,0,0,.6);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:999}.modalView.show[data-v-73e05956]{opacity:1;-webkit-transform:scale(1);transform:scale(1);pointer-events:auto}.flex_column[data-v-73e05956]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.backgroundColor-white[data-v-73e05956]{background-color:#fff}.border_radius_10px[data-v-73e05956]{border-radius:10px}.padding1vh[data-v-73e05956]{padding:1vh}.posterImage[data-v-73e05956]{width:85vw}.flex_row[data-v-73e05956]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.marginTop2vh[data-v-73e05956]{margin-top:2vh}body.?%PAGE?%[data-v-73e05956]{background-color:#fff}',""]),e.exports=t}}]);