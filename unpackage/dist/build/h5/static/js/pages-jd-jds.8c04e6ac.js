(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jd-jds"],{3395:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.fixed[data-v-115059ce]{position:fixed;top:%?88?%;left:0;right:0;background-color:#fff;z-index:99}.content[data-v-115059ce]{margin-top:%?90?%}.header-category[data-v-115059ce]{height:%?90?%;width:100vw;white-space:nowrap;position:relative;padding:0 %?20?%}.header-category .category-item[data-v-115059ce]{display:inline-block;padding:%?20?% %?0?% %?10?%;margin:0 %?20?%}.header-category .activeCategory[data-v-115059ce]{color:#db0011;border-bottom:%?4?% solid #db0011}.content-main[data-v-115059ce]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.content-main .goods-item[data-v-115059ce]{width:50%}',""]),t.exports=e},4875:function(t,e,n){var o=n("3395");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("4f06").default;r("2f27da06",o,!0,{sourceMap:!1,shadowMode:!1})},5968:function(t,e,n){"use strict";var o=n("ee27");n("99af"),n("4160"),n("b680"),n("e25e"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("d0ff")),a={data:function(){return{isBackTop:!1,grade:0,currentTab:0,scrollLeft:0,showList:[],category:["零食","饮品","蔬菜","厨房","纸巾","洗衣液","洗浴","母婴","湿巾","车载"],page:1}},onLoad:function(t){this.grade=this.$queue.getStorageData("grade")||.7,this.getGoodsList()},onPageScroll:function(t){this.isBackTop=t.scrollTop>500},onReachBottom:function(){this.getGoodsList()},methods:{handleBackTop:function(){uni.pageScrollTo({scrollTop:0,duration:500})},getGoodsList:function(){var t=this,e="/tao/jd/goods/list/".concat(this.page,"?sortName=4&keywords=").concat(this.category[this.currentTab]);this.$request(e).then((function(e){var n=e.data.data.list;t.page+=1,n.forEach((function(e){e.itempic=e.imageInfo.imageList[0].url,e.couponmoney=parseInt(e.priceInfo.lowestPrice-e.priceInfo.lowestCouponPrice).toFixed(0),e.tkmoney=(e.commissionInfo.couponCommission*t.grade).toFixed(2)}));t.currentTabItem;t.showList=[].concat((0,r.default)(t.showList),(0,r.default)(n))}))},toggleTabList:function(t){this.handleBackTop(),this.showList=[],this.currentTab=t,this.scrollLeft=48*this.currentTab,this.getGoodsList()}}};e.default=a},cda8:function(t,e,n){"use strict";var o={goodsItemPlus:n("7f77").default,backTop:n("4a58").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"fixed"},[n("v-uni-scroll-view",{staticClass:"header-category",attrs:{"scroll-x":"true","scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(t.category,(function(e,o){return n("v-uni-view",{key:e,staticClass:"category-item",class:{activeCategory:o===t.currentTab},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleTabList(o)}}},[t._v(t._s(e))])})),1)],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"content-main"},[t._l(t.showList,(function(t,e){return[n("goods-item-plus",{key:e+"_0",staticClass:"goods-item",attrs:{img:t.itempic,shoptype:"D",title:t.skuName,price:t.priceInfo.lowestCouponPrice,sales:t.inOrderCount30Days,coupon:t.couponmoney,cashback:t.tkmoney,shopname:t.shopInfo.shopName,itemid:t.spuid}})]}))],2)],1),n("back-top",{attrs:{active:t.isBackTop},on:{backtop:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBackTop.apply(void 0,arguments)}}})],1)},a=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},d0ff:function(t,e,n){"use strict";function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function r(t){if(Array.isArray(t))return o(t)}n.r(e);n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("25f0");function i(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||a(t)||i(t)||s()}n.d(e,"default",(function(){return c}))},d57b:function(t,e,n){"use strict";n.r(e);var o=n("5968"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=r.a},dfff:function(t,e,n){"use strict";n.r(e);var o=n("cda8"),r=n("d57b");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("e348");var i,s=n("f0c5"),c=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"115059ce",null,!1,o["a"],i);e["default"]=c.exports},e348:function(t,e,n){"use strict";var o=n("4875"),r=n.n(o);r.a}}]);