(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-search"],{"1eaa":function(t,a,e){"use strict";var i=e("ee27");e("99af"),e("7db0"),e("4160"),e("b680"),e("e25e"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=i(e("d0ff")),n={data:function(){return{isBackTop:!1,grade:0,showList:[],searchText:"",currentTab:0,currentTabItem:0,tabList:[{position:"tb",name:"淘宝"},{position:"pdd",name:"拼多多"},{position:"jd",name:"京东"}],tab:[{name:"热销",position:2,pdd:6,jd:5,total:0,data:[]},{name:"综合",position:0,pdd:0,jd:5,total:0,data:[]},{name:"最新",position:1,pdd:12,jd:5,total:0,data:[]},{name:"高佣",position:6,pdd:14,jd:5,total:0,data:[]},{name:"低价",position:4,pdd:9,jd:5,total:0,data:[]}],emptyData:[{name:"热销",total:0,data:[]},{name:"综合",total:0,data:[]},{name:"最新",total:0,data:[]},{name:"高佣",total:0,data:[]},{name:"低价",total:0,data:[]}],taobaoData:[{name:"热销",total:0,data:[]},{name:"综合",total:0,data:[]},{name:"最新",total:0,data:[]},{name:"高佣",total:0,data:[]},{name:"低价",total:0,data:[]}],pddData:[{name:"热销",total:0,data:[]},{name:"综合",total:0,data:[]},{name:"最新",total:0,data:[]},{name:"高佣",total:0,data:[]},{name:"低价",total:0,data:[]}],jdData:[{name:"热销",total:0,data:[]},{name:"综合",total:0,data:[]},{name:"最新",total:0,data:[]},{name:"高佣",total:0,data:[]},{name:"低价",total:0,data:[]}],min_id:1,cid:1,taobaoSort:2,taobaoPage:1,pddSort:6,pddPage:1,jdSort:5,jdPage:1}},onLoad:function(t){this.searchText=t.name,this.cid=t.cid,uni.setNavigationBarTitle({title:t.name}),this.grade=this.$queue.getStorageData("grade")||.7,this.getTaobaoList()},onPageScroll:function(t){this.isBackTop=t.scrollTop>500},onReachBottom:function(){0===this.currentTab&&(this.taobaoSort=this.tab[this.currentTabItem].position,this.getTaobaoList()),1===this.currentTab&&this.getPddList(),2===this.currentTab&&this.getJdList()},computed:{showContent:function(){return 0===this.currentTab?this.taobaoData[this.currentTabItem].data.length:1===this.currentTab?this.pddData[this.currentTabItem].data.length:2===this.currentTab?this.jdData[this.currentTabItem].data.length:void 0}},methods:{handleBackTop:function(){uni.pageScrollTo({scrollTop:0,duration:500})},clickCancel:function(){this.searchText=""},clickSearch:function(){var t=this;if(this.searchText){this.handleBackTop();var a=this.$queue.getStorageData("searchHistory")||[],e=a.find((function(a){return t.searchText===a}));e||a.push(this.searchText),this.$queue.setStorageData("searchHistory",a),this.taobaoData.forEach((function(t){t.data=[]})),this.pddData.forEach((function(t){t.data=[]})),this.jdData.forEach((function(t){t.data=[]})),0===this.currentTab&&(this.taobaoSort=this.tab[this.currentTabItem].position,this.getTaobaoList()),1===this.currentTab&&(this.pddSort=this.tab[this.currentTabItem].pdd,this.getPddList()),2===this.currentTab&&(this.jdSort=this.tab[this.currentTabItem].jd,this.getJdList())}else uni.showToast({icon:"none",title:"搜索内容不能为空"})},getTaobaoList:function(){var t=this,a="/api/supersearch/apikey/maxd/keyword/".concat(this.searchText,"/back/20/sort/").concat(this.taobaoSort,"/min_id/").concat(this.min_id,"/is_coupon/1/tb_p/").concat(this.taobaoPage);this.$request(a).then((function(a){var e=a.data.data;t.min_id=a.data.min_id,t.taobaoPage=a.data.tb_p,e.forEach((function(a){a.tkmoney=(a.itemendprice*(.01*a.tkrates)*t.grade).toFixed(2)}));var i=t.currentTabItem;t.taobaoData[i].data=[].concat((0,o.default)(t.taobaoData[i].data),(0,o.default)(e)),t.taobaoData[i].total=t.taobaoData[i].data.length}))},getPddList:function(){var t=this,a="/tao/pdd/list/keyword/".concat(this.pddSort,"/page/").concat(this.pddPage,"/pageSize/20?keyword=").concat(this.searchText);this.$request(a).then((function(a){t.pddPage+=1;var e=a.data.goodsSearchResponse.goodsList;e.forEach((function(a){a.itemprice=(.01*a.minGroupPrice).toFixed(2),a.itemendprice=(.01*(a.minGroupPrice-a.couponDiscount)).toFixed(2),a.tkmoney=(.01*(a.minGroupPrice-a.couponDiscount)*(.001*a.promotionRate)*t.grade).toFixed(2),a.couponmoney=(a.itemprice-a.itemendprice).toFixed(0)}));var i=t.currentTabItem;t.pddData[i].data=[].concat((0,o.default)(t.pddData[i].data),(0,o.default)(e)),t.pddData[i].total=t.pddData[i].data.length}))},getJdList:function(){var t=this,a="/tao/jd/goods/list/".concat(this.jdPage,"?sortName=").concat(this.jdSort,"&keywords=").concat(this.searchText);this.$request(a).then((function(a){t.jdPage+=1;var e=a.data.data.list;e.forEach((function(a){a.itempic=a.imageInfo.imageList[0].url,a.couponmoney=parseInt(a.priceInfo.lowestPrice-a.priceInfo.lowestCouponPrice).toFixed(0),a.tkmoney=(a.commissionInfo.couponCommission*t.grade).toFixed(2)}));var i=t.currentTabItem;t.jdData[i].data=[].concat((0,o.default)(t.jdData[i].data),(0,o.default)(e)),t.jdData[i].total=t.jdData[i].data.length}))},toggleTabList:function(t){this.currentTab=t,this.handleBackTop(),0===this.currentTab&&this.getTaobaoList(),1===this.currentTab&&this.getPddList(),2===this.currentTab&&this.getJdList()},toggleTab:function(t){this.currentTabItem=t,this.handleBackTop(),0===this.currentTab&&(this.taobaoSort=this.tab[t].position,this.taobaoData[this.currentTabItem].data.length||this.getTaobaoList()),1===this.currentTab&&(this.pddSort=this.tab[t].pdd,this.pddData[this.currentTabItem].data.length||this.getPddList()),2===this.currentTab&&(this.jdSort=this.tab[t].jd,this.jdData[this.currentTabItem].data.length||this.getJdList())}}};a.default=n},4116:function(t,a,e){"use strict";e.r(a);var i=e("6bbf"),o=e("def8");for(var n in o)"default"!==n&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("e96a");var r,d=e("f0c5"),s=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"27dced94",null,!1,i["a"],r);a["default"]=s.exports},"470a":function(t,a,e){var i=e("88f9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("0f669027",i,!0,{sourceMap:!1,shadowMode:!1})},"6bbf":function(t,a,e){"use strict";var i={goodsItemPlus:e("7f77").default,backTop:e("4a58").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"search"},[e("v-uni-view",{staticClass:"fixed"},[e("v-uni-view",{staticClass:"tablist"},t._l(t.tabList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"tablist-item",class:{"tablist-item-active":i===t.currentTab},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toggleTabList(i)}}},[t._v(t._s(a.name))])})),1),e("v-uni-view",{staticClass:"tab"},t._l(t.tab,(function(a,i){return e("v-uni-view",{key:i,staticClass:"tab-item",class:{"tab-item-active":i===t.currentTabItem},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toggleTab(i)}}},[t._v(t._s(a.name))])})),1)],1),e("v-uni-view",{staticClass:"content"},[t.showContent?e("v-uni-view",{staticClass:"content-main"},[t._l(t.taobaoData[t.currentTabItem].data,(function(a,i){return 0===t.currentTab?[e("goods-item-plus",{key:i+"_0",staticClass:"goods-item",attrs:{img:a.itempic,shoptype:a.shoptype,title:a.itemtitle,price:a.itemprice,sales:a.itemsale,coupon:a.couponmoney,cashback:a.tkmoney,shopname:a.shopname,itemid:a.itemid}})]:t._e()})),t._l(t.pddData[t.currentTabItem].data,(function(a,i){return 1===t.currentTab?[e("goods-item-plus",{key:i+"_0",staticClass:"goods-item",attrs:{img:a.goodsImageUrl,shoptype:"A",title:a.goodsDesc,price:a.itemendprice,sales:a.salesTip,coupon:a.couponmoney,cashback:a.tkmoney,shopname:a.mallName,itemid:a.goodsId}})]:t._e()})),t._l(t.jdData[t.currentTabItem].data,(function(a,i){return 2===t.currentTab?[e("goods-item-plus",{key:i+"_0",staticClass:"goods-item",attrs:{img:a.itempic,shoptype:"D",title:a.skuName,price:a.priceInfo.lowestCouponPrice,sales:a.inOrderCount30Days,coupon:a.couponmoney,cashback:a.tkmoney,shopname:a.shopInfo.shopName,itemid:a.spuid}})]:t._e()}))],2):t._e()],1),e("back-top",{attrs:{active:t.isBackTop},on:{backtop:function(a){arguments[0]=a=t.$handleEvent(a),t.handleBackTop.apply(void 0,arguments)}}})],1)},n=[];e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}))},"88f9":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.fixed[data-v-27dced94]{position:fixed;top:%?88?%;left:0;right:0;background-color:#fff;z-index:99}.content[data-v-27dced94]{margin-top:%?160?%}.search-header[data-v-27dced94]{padding-top:%?30?%;height:%?150?%;background-image:-webkit-linear-gradient(left,#f15b6c,#db0011);background-image:linear-gradient(90deg,#f15b6c,#db0011)}.search-header .back[data-v-27dced94]{color:#fff}.search-header .search-header-title[data-v-27dced94]{text-align:center;font-size:%?30?%;height:%?130?%;line-height:%?130?%;color:#fff;letter-spacing:.05rem}.search-bar[data-v-27dced94]{margin:0 auto;background-color:#fff;width:70%;padding:0 %?40?%;border-radius:%?35?%;position:relative;line-height:%?70?%}.search-bar .input[data-v-27dced94]{background-color:#fff;height:%?70?%}.search-bar .iconfont[data-v-27dced94]{position:absolute;top:0;right:%?130?%;color:#db0011;z-index:99}.search-bar .search-btn[data-v-27dced94]{height:%?70?%;line-height:%?70?%;text-align:center;color:#fff;border-radius:%?35?%;width:%?120?%;background-color:#ffb925;position:absolute;top:0;right:0;z-index:98}.tablist[data-v-27dced94]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;background-color:#fff;padding-bottom:%?10?%}.tablist .tablist-item[data-v-27dced94]{height:%?80?%;line-height:%?80?%;padding:0 %?20?%;font-size:%?32?%}.tablist .tablist-item-active[data-v-27dced94]{color:#db0011;border-bottom:%?4?% solid #f15b6c}.tab[data-v-27dced94]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;background-color:#fff;padding:0 %?120?% %?10?%}.tab .tab-item[data-v-27dced94]{height:%?60?%;line-height:%?60?%;padding:0 %?10?%}.tab .tab-item-active[data-v-27dced94]{color:#db0011;border-bottom:%?4?% solid #f15b6c}.content-main[data-v-27dced94]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.content-main .goods-item[data-v-27dced94]{width:50%}',""]),t.exports=a},d0ff:function(t,a,e){"use strict";function i(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,i=new Array(a);e<a;e++)i[e]=t[e];return i}function o(t){if(Array.isArray(t))return i(t)}e.r(a);e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("3ca3"),e("ddb0");function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("fb6a"),e("25f0");function r(t,a){if(t){if("string"===typeof t)return i(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,a):void 0}}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return o(t)||n(t)||r(t)||d()}e.d(a,"default",(function(){return s}))},def8:function(t,a,e){"use strict";e.r(a);var i=e("1eaa"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},e96a:function(t,a,e){"use strict";var i=e("470a"),o=e.n(i);o.a}}]);