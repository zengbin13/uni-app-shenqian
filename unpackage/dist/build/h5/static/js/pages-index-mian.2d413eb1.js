(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-mian"],{"003e":function(t,e,i){"use strict";var n=i("ee27");i("99af"),i("4160"),i("b680"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("d0ff")),o={data:function(){return{isBackTop:!1,grade:0,currentTab:0,tabList:[{name:"新人免单",data:[],sort:1},{name:"省钱教程",data:[],sort:2},{name:"赚钱流程",data:[],sort:3}],page:1,min_id:0,cat_id:0}},onLoad:function(t){this.grade=this.$queue.getStorageData("grade")||.7,this.getGoodsList()},onPageScroll:function(t){this.isBackTop=t.scrollTop>500},onReachBottom:function(){this.getGoodsList()},methods:{handleBackTop:function(){uni.pageScrollTo({scrollTop:0,duration:500})},getGoodsList:function(){var t=this,e="/api/low_price_Pinkage_data/apikey/maxd/order/4/type/4/min_id/".concat(this.page,"/cid/0");this.$request(e).then((function(e){var i=e.data.data;t.page=e.data.min_id,i.forEach((function(e){e.tkmoney=(e.itemendprice*(.01*e.tkrates)*t.grade).toFixed(2)})),t.tabList[t.currentTab].data=[].concat((0,a.default)(t.tabList[t.currentTab].data),(0,a.default)(i))}))},toggleTabList:function(t){this.handleBackTop(),this.currentTab=t,this.getGoodsList()}}};e.default=o},"1e1b":function(t,e,i){"use strict";i.r(e);var n=i("3eb4"),a=i("78fc");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("f65b");var r,c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"75a51bfa",null,!1,n["a"],r);e["default"]=s.exports},2074:function(t,e,i){var n=i("9792");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("164ee567",n,!0,{sourceMap:!1,shadowMode:!1})},"3eb4":function(t,e,i){"use strict";var n={goodsIndex:i("21bc").default,backTop:i("4a58").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"fixed"},[i("v-uni-view",{staticClass:"tablist"},t._l(t.tabList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"tablist-item",class:{"tablist-item-active":n===t.currentTab},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleTabList(n)}}},[t._v(t._s(e.name))])})),1)],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===t.currentTab,expression:"currentTab === 0"}],staticClass:"content-desc"},[i("v-uni-view",{staticStyle:{background:"#FFFFFF","text-align":"center",padding:"16px",color:"#FC3F78","font-size":"20px"}},[i("v-uni-view",[t._v("▼")]),t._v("新人免单流程"),i("v-uni-view",{staticStyle:{"font-size":"14px","margin-top":"8px",color:"#FF6600"}},[i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.register.apply(void 0,arguments)}}},[t._v("注册会员")]),t._v("» 领券下单 » 等待收货 » 返至我的 » 提现")],1)],1),i("v-uni-view",{staticStyle:{"margin-bottom":"1px",background:"#FFFFFF","text-align":"center",padding:"16px",color:"#FC3F78","font-size":"20px"}},[i("v-uni-view",[t._v("▼")]),t._v("以下商品，新人免单"),i("v-uni-view",{staticStyle:{"font-size":"14px","margin-top":"8px",color:"#FF6600"}},[t._v("仅限还未出过单的会员参与，出过单会员购买不免单")]),i("v-uni-view",{staticStyle:{"font-size":"14px","margin-top":"8px",color:"#FF6600"}},[t._v("（仅限5元内商品全额免单）")])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.currentTab,expression:"currentTab === 1"}],staticClass:"content-desc"},[i("v-uni-view",{staticStyle:{background:"#FFFFFF","text-align":"center",padding:"16px",color:"#FC3F78","font-size":"20px"}},[i("v-uni-view",[t._v("▼")]),t._v("省钱流程"),i("v-uni-view",[t._v("▼")]),i("v-uni-view",{staticStyle:{"font-size":"14px",color:"#FF6600"}},[t._v("进入淘宝/京东/拼多多购物车选择任意商品点击进入详情")]),i("v-uni-view",[t._v("▼")]),i("v-uni-view",{staticStyle:{"font-size":"14px",color:"#FF6600"}},[t._v("长按复制商品标题")]),i("v-uni-view",[t._v("▼")]),i("v-uni-view",{staticStyle:{"font-size":"14px",color:"#FF6600"}},[t._v("发送至省钱兄公众号")]),i("v-uni-view",[t._v("▼")]),i("v-uni-view",{staticStyle:{"font-size":"14px",color:"#FF6600"}},[t._v("找到对应商品进入商品详情")]),i("v-uni-view",[t._v("▼")]),i("v-uni-view",{staticStyle:{"font-size":"14px",color:"#FF6600"}},[t._v("点击立即领券（一键复制）")]),i("v-uni-view",[t._v("▼")]),i("v-uni-view",{staticStyle:{"font-size":"14px",color:"#FF6600"}},[t._v("打开淘宝自动弹出（点击立即领券）")])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===t.currentTab,expression:"currentTab === 2"}],staticClass:"content-desc"},[i("v-uni-view",{staticStyle:{background:"#FFFFFF","text-align":"center",padding:"16px",color:"#FC3F78","font-size":"20px"}},[i("v-uni-view",[t._v("▼")]),t._v("加入会员流程"),i("v-uni-view",{staticStyle:{"font-size":"14px","margin-top":"8px",color:"#FF6600"}},[t._v("注册账号 »进入我的 » 会员申请 »淘宝授权")])],1),i("v-uni-view",{staticStyle:{"margin-bottom":"1px",background:"#FFFFFF","text-align":"center",padding:"16px",color:"#FC3F78","font-size":"20px"}},[i("v-uni-view",[t._v("▼")]),t._v("会员赚钱流程"),i("v-uni-view",{staticStyle:{"font-size":"14px","margin-top":"8px",color:"#FF6600"}},[t._v("选择任意商品 »商品详情 » 生成海报 »分享给朋友")])],1),i("v-uni-view",{staticStyle:{"margin-bottom":"1px",background:"#FFFFFF","text-align":"center",padding:"16px",color:"#FC3F78","font-size":"20px"}},[i("v-uni-view",[t._v("▼")]),t._v("会员升级流程"),i("v-uni-view",{staticStyle:{"font-size":"14px","margin-top":"8px",color:"#FF6600"}},[t._v("进入我的 »推广中心 » 会员升级 »")]),i("v-uni-view",{staticStyle:{"font-size":"14px","margin-top":"8px",color:"#FF6600"}},[t._v("生成海报 »分享给朋友")])],1)],1),i("v-uni-view",{staticStyle:{"text-align":"center","font-size":"36rpx","line-height":"70rpx",height:"70rpx",color:"#fff","background-color":"#e10a07",position:"sticky",top:"170rpx","z-index":"9"}},[t._v("— 免单商品 —")]),i("v-uni-view",{staticClass:"content-main"},[t._l(t.tabList[t.currentTab].data,(function(t,e){return[i("goods-index",{key:e+"_0",attrs:{goodsInfo:t}})]}))],2)],1),i("back-top",{attrs:{active:t.isBackTop},on:{backtop:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBackTop.apply(void 0,arguments)}}})],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"78fc":function(t,e,i){"use strict";i.r(e);var n=i("003e"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},9792:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.fixed[data-v-75a51bfa]{position:fixed;top:%?88?%;left:0;right:0;background-color:#fff;z-index:99}.content[data-v-75a51bfa]{margin-top:%?90?%}.tablist[data-v-75a51bfa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;background-color:#db0011;color:#fff;padding-bottom:%?10?%}.tablist .tablist-item[data-v-75a51bfa]{height:%?80?%;line-height:%?80?%;font-size:%?32?%}.tablist .tablist-item-active[data-v-75a51bfa]{border-bottom:%?4?% solid #fff}.content-main[data-v-75a51bfa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.content-main .goods-item[data-v-75a51bfa]{width:50%}',""]),t.exports=e},d0ff:function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function a(t){if(Array.isArray(t))return n(t)}i.r(e);i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}i("fb6a"),i("25f0");function r(t,e){if(t){if("string"===typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return a(t)||o(t)||r(t)||c()}i.d(e,"default",(function(){return s}))},f65b:function(t,e,i){"use strict";var n=i("2074"),a=i.n(n);a.a}}]);