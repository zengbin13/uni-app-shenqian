(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-collect"],{"0bba":function(t,e,a){"use strict";a.r(e);var n=a("48f9"),i=a("1a74");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("a6a4");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"13def1f0",null,!1,n["a"],o);e["default"]=c.exports},"1a74":function(t,e,a){"use strict";a.r(e);var n=a("6426"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"48f9":function(t,e,a){"use strict";var n={goodsItemPlus:a("7f77").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"footprint"},[a("v-uni-view",{staticClass:"tablist"},t._l(t.tabList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"tablist-item",class:{"tablist-item-active":n===t.currentTab},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleTabList(n)}}},[t._v(t._s(e.name))])})),1),a("v-uni-view",{staticClass:"content-wrap"},[a("v-uni-view",{staticClass:"message"},[t._v(t._s(t.message))]),t.dataList.length?a("v-uni-view",{staticClass:"content"},[t._l(t.dataList,(function(t,e){return[a("goods-item-plus",{key:e+"_0",staticClass:"goods-item",attrs:{img:t.img,shoptype:t.shoptype,title:t.title,price:t.price,sales:t.sales,coupon:t.coupon,cashback:t.cashback,shopname:t.shopname,itemid:t.itemid}})]}))],2):t._e()],1)],1)},s=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}))},6426:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{currentTab:0,tabList:[{position:"tb",name:"淘宝"},{position:"pdd",name:"拼多多"},{position:"jd",name:"京东"}],message:"提示: 收藏最多保存100个宝贝，如果超出100个宝贝，如果此时收藏了新的宝贝，最末尾的宝贝将会自动删除",taobaoCollect:[],pddCollect:[],jdCollect:[]}},onShow:function(){this.taobaoCollect=this.$queue.getStorageData("taobaoCollect")||[],this.pddCollect=this.$queue.getStorageData("pddCollect")||[],this.jdCollect=this.$queue.getStorageData("jdCollect")||[]},computed:{dataList:function(){return 0===this.currentTab?this.taobaoCollect:1===this.currentTab?this.pddCollect:2===this.currentTab?this.jdCollect:void 0}},methods:{toggleTabList:function(t){this.currentTab=t}}};e.default=n},"7dc6":function(t,e,a){var n=a("a284");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("63cd5806",n,!0,{sourceMap:!1,shadowMode:!1})},a284:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.footprint[data-v-13def1f0]{position:relative}.tablist[data-v-13def1f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;background-color:#fff;padding-bottom:%?4?%;position:fixed;top:%?88?%;left:0;right:0;z-index:20;zoom:1}.tablist .tablist-item[data-v-13def1f0]{height:%?80?%;line-height:%?80?%;padding:0 %?20?%;font-size:%?32?%}.tablist .tablist-item-active[data-v-13def1f0]{color:#db0011;border-bottom:%?4?% solid #f15b6c}.content-wrap[data-v-13def1f0]{margin-top:%?88?%}.message[data-v-13def1f0]{padding:%?30?%;color:#999;line-height:%?32?%;font-size:%?26?%}.content[data-v-13def1f0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.content .goods-item[data-v-13def1f0]{width:50%}',""]),t.exports=e},a6a4:function(t,e,a){"use strict";var n=a("7dc6"),i=a.n(n);i.a}}]);