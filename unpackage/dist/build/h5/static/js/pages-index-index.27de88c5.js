(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"068b":function(a,t,e){"use strict";var i={searchBar:e("ef45").default,goodsIndex:e("21bc").default,goodsItem:e("2c0b").default,backTop:e("4a58").default},n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"header-wrap"},[e("search-bar",{staticClass:"header-search"}),e("v-uni-scroll-view",{staticClass:"header-category",attrs:{"scroll-x":"true","scroll-with-animation":!0,"scroll-left":a.scrollLeft}},a._l(a.category,(function(t,i){return e("v-uni-view",{key:t.name,staticClass:"category-level1",class:{activeCategory:i===a.currentIndex},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.selectTab(i)}}},[a._v(a._s(t.name))])})),1)],1),e("v-uni-view",{staticClass:"content-wrap"},[0===a.currentIndex?e("v-uni-view",{staticClass:"content"},[e("v-uni-swiper",{staticClass:"main-swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3,"indicator-active-color":"#dd0b1c"}},a._l(a.swiperList,(function(a){return e("v-uni-swiper-item",{key:a.id},[e("v-uni-navigator",{attrs:{url:a.url}},[e("v-uni-image",{attrs:{src:a.image_url}})],1)],1)})),1),e("v-uni-view",{staticClass:"main-list"},a._l(a.mainList,(function(t,i){return e("v-uni-navigator",{key:t.id,staticClass:"main-list-item",attrs:{url:t.url,"hover-class":"none"}},[e("v-uni-image",{attrs:{src:t.image_url,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"main-list-item-text"},[a._v(a._s(t.title))])],1)})),1),a.mainList.length?e("v-uni-navigator",{staticClass:"main-vip",attrs:{url:"/pages/member/publisher"}},[e("v-uni-image",{attrs:{src:"https://www.gomyorder.cn/go.png",mode:"aspectFill"}})],1):a._e(),a.mainList2.length?e("v-uni-view",{staticClass:"main-block"},[e("v-uni-view",{staticClass:"block-top"},[e("v-uni-navigator",{staticClass:"block-1",attrs:{url:"/pages/index/list?title=爆款美食&type=12"}},[e("v-uni-view",{staticClass:"block-1-title"},[a._v(a._s(a.mainList2[0].titleList[0])),e("v-uni-text",[a._v(a._s(a.mainList2[0].titleList[1]))])],1),e("v-uni-view",{staticClass:"block-1-desc"},[a._v(a._s(a.mainList2[0].titleList[2]))]),e("v-uni-image",{attrs:{src:a.mainList2[0].image_url,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"block-top-right"},[e("v-uni-navigator",{staticClass:"block-2",attrs:{url:"/pages/index/list?title=每日上新&type=1"}},[e("v-uni-view",[e("v-uni-view",{staticClass:"block-title"},[a._v(a._s(a.mainList2[1].titleList[0]))]),e("v-uni-view",{staticClass:"block-desc"},[a._v(a._s(a.mainList2[1].titleList[2]))])],1),e("v-uni-image",{attrs:{src:a.mainList2[1].image_url,mode:"aspectFill"}})],1),e("v-uni-navigator",{staticClass:"block-3",attrs:{url:"/pages/index/tuiguang?cid=1"}},[e("v-uni-view",[e("v-uni-view",{staticClass:"block-title"},[a._v(a._s(a.mainList2[5].titleList[0]))]),e("v-uni-view",{staticClass:"block-desc"},[a._v(a._s(a.mainList2[5].titleList[1]))])],1),e("v-uni-image",{attrs:{src:a.mainList2[5].image_url,mode:"aspectFill"}})],1)],1)],1),e("v-uni-view",{staticClass:"block-bottom"},[e("v-uni-navigator",{staticClass:"block-4",attrs:{url:"/pages/index/tuiguang?cid=4"}},[e("v-uni-view",[e("v-uni-view",{staticClass:"block-title"},[a._v(a._s(a.mainList2[2].titleList[0]))]),e("v-uni-view",{staticClass:"block-desc"},[a._v(a._s(a.mainList2[2].titleList[1]))])],1),e("v-uni-image",{attrs:{src:a.mainList2[2].image_url,mode:"aspectFill"}})],1),e("v-uni-navigator",{staticClass:"block-5",attrs:{url:"/pages/index/tuiguang?cid=5"}},[e("v-uni-view",[e("v-uni-view",{staticClass:"block-title"},[a._v(a._s(a.mainList2[3].titleList[0]))]),e("v-uni-view",{staticClass:"block-desc"},[a._v(a._s(a.mainList2[3].titleList[1]))])],1),e("v-uni-image",{attrs:{src:a.mainList2[3].image_url,mode:"aspectFill"}})],1),e("v-uni-navigator",{staticClass:"block-6",attrs:{url:"/pages/index/tuiguang?cid=6"}},[e("v-uni-view",[e("v-uni-view",{staticClass:"block-title"},[a._v(a._s(a.mainList2[4].titleList[0]))]),e("v-uni-view",{staticClass:"block-desc"},[a._v(a._s(a.mainList2[4].titleList[1]))])],1),e("v-uni-image",{attrs:{src:a.mainList2[4].image_url,mode:"aspectFill"}})],1)],1)],1):a._e(),a.category[0].orderList.length?e("v-uni-view",[e("v-uni-view",{staticClass:"main-title"},[e("v-uni-text",[a._v("精选好物")])],1),a.choiceList.length?e("v-uni-view",[a._l(a.choiceList,(function(a,t){return[e("goods-index",{key:t+"_0",attrs:{goodsInfo:a}})]}))],2):a._e(),e("v-uni-view",{staticClass:"main-title"},[e("v-uni-text",[a._v("为你推荐")])],1),a.category[0].orderList.length?e("v-uni-view",{staticClass:"main-recommend"},[a._l(a.category[0].orderList,(function(a,t){return[e("goods-index",{key:t+"_0",attrs:{goodsInfo:a}})]}))],2):a._e()],1):a._e()],1):e("v-uni-view",{staticClass:"content-sec"},[a.category[a.currentIndex].banner.length?e("v-uni-view",{staticClass:"banner"},a._l(a.category[a.currentIndex].banner,(function(t){return e("v-uni-view",{key:t.son_name,staticClass:"banner-item"},[e("v-uni-image",{attrs:{src:t.imgurl,mode:"widthFix"}}),e("v-uni-text",[a._v(a._s(t.son_name))])],1)})),1):a._e(),e("v-uni-view",{staticClass:"content-sec-wrap"},a._l(a.category[a.currentIndex].orderList,(function(a,t){return e("goods-item",{key:a.itemid+t,staticClass:"content-sec-item",attrs:{goodsInfo:a}})})),1)],1)],1),e("back-top",{attrs:{active:a.isBackTop},on:{backtop:function(t){arguments[0]=t=a.$handleEvent(t),a.handleBackTop.apply(void 0,arguments)}}})],1)},o=[];e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}))},"1e8b":function(a,t,e){"use strict";var i=e("ee27");e("99af"),e("4160"),e("ac1f"),e("1276"),e("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(e("d0ff")),o=i(e("2c0b")),c={data:function(){return{scrollLeft:0,category:[{name:"热门",positon:0,loadingType:0,page:0,orderList:[],banner:[]},{name:"美食",positon:11,loadingType:0,page:0,orderList:[],banner:[{son_name:"干果",imgurl:"http://img.haodanku.com/31695fbcfec8af7274b493698d5c1f5a-600"},{son_name:"干货",imgurl:"http://img.haodanku.com/40693f1b39155f40843b4023d938a812-600"},{son_name:"速食",imgurl:"http://img.haodanku.com/78ca01c1baddaed135f179cbf495d780-600"},{son_name:"零食",imgurl:"http://img.haodanku.com/3bba49572000849457705fb6e7b25756-600"},{son_name:"饮料",imgurl:"http://img.haodanku.com/e9ced92e2c3c5a9125bde206632923f8-600"},{son_name:"酒水",imgurl:"http://img.haodanku.com/6b2095fa96eb10aef4cc968253a77e62-600"},{son_name:"土鸡蛋",imgurl:"http://img.haodanku.com/011b54caa88d4ebf172312ad228e234c-600"},{son_name:"大米",imgurl:"http://img.haodanku.com/be27573ccf52be1f42238f29167516da-600"},{son_name:"大闸蟹",imgurl:"http://img.haodanku.com/ee9e645ee82d6ef1bad1a9c676122375-600"},{son_name:"新鲜水果",imgurl:"http://img.haodanku.com/2ae6a731a71e6021383e808db628915d-600"}]},{name:"居家",positon:10,loadingType:0,page:0,orderList:[],banner:[{son_name:"卫生巾",imgurl:"http://img.haodanku.com/d4ad5258247d5cfcd397fed061c55332-600"},{son_name:"卷纸",imgurl:"http://img.haodanku.com/1fa08dd194ae423de72af366e6fa319c-600"},{son_name:"抽纸",imgurl:"http://img.haodanku.com/8b15fc81e69e7140bfdd6af51890a5f7-600"},{son_name:"洗手液",imgurl:"http://img.haodanku.com/afa011f3b8e0757b5b9d67af74062fe6-600"},{son_name:"洗衣液",imgurl:"http://img.haodanku.com/e068719387ea102d937ec3724598675c-600"},{son_name:"牙膏",imgurl:"http://img.haodanku.com/9d36678d53c9c83a1a6a7cd1e9637b65-600"},{son_name:"沐浴露",imgurl:"http://img.haodanku.com/14bfdb8fc38493aa985d310d390aad19-600"},{son_name:"洗发水",imgurl:"http://img.haodanku.com/162652a65fc931cf7aba34436a5882cd-600"},{son_name:"清洁剂",imgurl:"http://img.haodanku.com/cc34507e016b01cc6005d028b55aa1cc-600"},{son_name:"牙刷",imgurl:"http://img.haodanku.com/529884a59eb3a2ed7cad27cc215f042c-600"}]},{name:"美妆",positon:4,loadingType:0,page:0,orderList:[],banner:[{son_name:"卸妆",imgurl:"http://img.haodanku.com/11f4c31e57040ca6578e395764685f9d-600"},{son_name:"唇膏",imgurl:"http://img.haodanku.com/73dce1ba7e1e6c2f087a82e6e2daaf0f-600"},{son_name:"洗面奶",imgurl:"http://img.haodanku.com/0390ae3565930d395244524603d38605-600"},{son_name:"眼线",imgurl:"http://img.haodanku.com/4216c4cdc29f8e9bce9722bf2329f4d4-600"},{son_name:"眼霜",imgurl:"http://img.haodanku.com/9bcc8b7e61d0958a4cf24efa92d8d7d9-600"},{son_name:"睫毛膏",imgurl:"http://img.haodanku.com/917ca505a2916d4308258c1df00aa6bc-600"},{son_name:"纤体",imgurl:"http://img.haodanku.com/900cbfe080fcea90a276c9b0367252ef-600"},{son_name:"腮红",imgurl:"http://img.haodanku.com/1305d219f6095577b2d4930531a1b3ee-600"},{son_name:"面膜",imgurl:"http://img.haodanku.com/f9ddb9d89e9bfd8312056b02c4081bcd-600"},{son_name:"面霜",imgurl:"http://img.haodanku.com/e57cb97f45eacb673b10d4179ce54079-600"}]},{name:"女装",positon:1,loadingType:0,page:0,orderList:[],banner:[{son_name:"妈妈装",imgurl:"http://img.haodanku.com/cf445d5d9ddad49a38c0e542be22b565-600"},{son_name:"T恤",imgurl:"http://img.haodanku.com/397fc31d9f3abdef5177ab1ec82a254c-600"},{son_name:"一字肩",imgurl:"http://img.haodanku.com/f4ca5e271d74fd5c29d051c7b1106f04-600"},{son_name:"卫衣",imgurl:"http://img.haodanku.com/2329f94b4030aa27e819e159d64969c4-600"},{son_name:"夹克",imgurl:"http://img.haodanku.com/ab499244178c525025d8a3e1ff4ed36e-600"},{son_name:"棉服",imgurl:"http://img.haodanku.com/6d3898d409060a49ebc6a80c150d15b2-600"},{son_name:"毛呢",imgurl:"http://img.haodanku.com/5b397df30169b79af64c569606b7e0af-600"},{son_name:"牛仔",imgurl:"http://img.haodanku.com/38a001153e2f30933f3cae16f2b2a171-600"},{son_name:"皮衣",imgurl:"http://img.haodanku.com/78c7fcecea8eaf4b329002b3308b3545-600"},{son_name:"短外套",imgurl:"http://img.haodanku.com/26a08a44cce036a5cf49a3322e4cbf37-600"}]},{name:"母婴",positon:9,loadingType:0,page:0,orderList:[],banner:[{son_name:"奶嘴",imgurl:"http://img.haodanku.com/dc498440b8169d4f411a2d303ce85c7d-600"},{son_name:"奶瓶",imgurl:"http://img.haodanku.com/b9d99fb2308fec3063560d1a442c51e6-600"},{son_name:"婴儿床",imgurl:"http://img.haodanku.com/8d25d45a30d633f31af4e6f8ec9e3eb7-600"},{son_name:"婴儿抱被",imgurl:"http://img.haodanku.com/e87f2636c6c571487bfe3e1b87c19f24-600"},{son_name:"学步车",imgurl:"http://img.haodanku.com/4bc090e096ed0d3fc550d373b257ce83-600"},{son_name:"推车",imgurl:"http://img.haodanku.com/192ba1c1901d19388a80ed93fe0dd532-600"},{son_name:"新生儿",imgurl:"http://img.haodanku.com/8eb521c44d4cc5c2c606101321f6878f-600"},{son_name:"睡袋",imgurl:"http://img.haodanku.com/2afc4fdac09e372274248fc6f421b8ef-600"},{son_name:"纸尿布",imgurl:"http://img.haodanku.com/0d2df54a221fca7d23c888464edf17e3-600"},{son_name:"连体睡衣",imgurl:"http://img.haodanku.com/e1fd4104171d365a3e76ada535e55c0b-600"}]},{name:"男装",positon:2,loadingType:0,page:0,orderList:[],banner:[{son_name:"马甲",imgurl:"http://img.haodanku.com/325254ca7f6e1f03c438d818cb4c67cb-600"},{son_name:"呢大衣",imgurl:"http://img.haodanku.com/f3c0fd52abf5945b5d253a64f8fce62d-600"},{son_name:"夹克",imgurl:"http://img.haodanku.com/250eefdd7acef0934e9f0fafffa75c88-600"},{son_name:"棉衣",imgurl:"http://img.haodanku.com/6b5cd4e0f1c6f346b552651209cf78a3-600"},{son_name:"棒球服",imgurl:"http://img.haodanku.com/2c296a0d7e6600da4b5f572c1c1878e4-600"},{son_name:"牛仔外套",imgurl:"http://img.haodanku.com/d55f8511d3916346c8a808dbe5b0868a-600"},{son_name:"皮衣",imgurl:"http://img.haodanku.com/14f79fee301aa6bb5a69318d9d95a2ef-600"},{son_name:"羽绒服",imgurl:"http://img.haodanku.com/51ee457f0c7b8c2ddb6f4e5e9dd9818e-600"},{son_name:"西装",imgurl:"http://img.haodanku.com/09290b9079002c5d957b245bf8d5dc22-600"},{son_name:"风衣",imgurl:"http://img.haodanku.com/16a6f06b799c96f30289e124ee084f9a-600"}]},{name:"鞋品",positon:6,loadingType:0,page:0,orderList:[],banner:[{son_name:"帆布鞋",imgurl:"http://img.haodanku.com/b1ec5218812aac9249071123cc9ff37d-600"},{son_name:"板鞋",imgurl:"http://img.haodanku.com/c0ea8e1a9a0e9c486c2f3b571b495395-600"},{son_name:"网布鞋",imgurl:"http://img.haodanku.com/acaf3517b2b374e568e512ea2c1c0334-600"},{son_name:"豆豆鞋",imgurl:"http://img.haodanku.com/6f74d2cd0dc9de9ea1b746ab78ba6b66-600"},{son_name:"男运动鞋",imgurl:"http://img.haodanku.com/7b3bc2187dfeaf64dbb61ad6d3eb358f-600"},{son_name:"女运动鞋",imgurl:"http://img.haodanku.com/9449c2e63a06f058a48f788c82591d00-600"},{son_name:"高跟鞋",imgurl:"http://img.haodanku.com/0ee8f1f3483c3faa69f5ef1f129cfac5-600"},{son_name:"中跟鞋",imgurl:"http://img.haodanku.com/5a52d7f0375aadd03558aab5a2489a81-600"},{son_name:"乐福鞋",imgurl:"http://img.haodanku.com/8ebb992fc125df908039e1468b634c1f-600"},{son_name:"低跟鞋",imgurl:"http://img.haodanku.com/19c7f3e00da194115690d71b5b0f6691-600"}]},{name:"箱包",positon:7,loadingType:0,page:0,orderList:[],banner:[{son_name:"单肩包",imgurl:"http://img.haodanku.com/4acda5f2e1ba8067820eb6a0b1517a48-600"},{son_name:"小方包",imgurl:"http://img.haodanku.com/d1f9ffe6b63d0100c573312981c293e9-600"},{son_name:"斜挎包",imgurl:"http://img.haodanku.com/197be2a76a74db7a9d3fee2e513b1cf0-600"},{son_name:"水桶包",imgurl:"http://img.haodanku.com/02f6b9bcb87488b3b2f538ed3bd901d9-600"},{son_name:"手提包",imgurl:"http://img.haodanku.com/5e2d18ca3f9f2863b7e02f88e1cd5895-600"},{son_name:"旅行箱",imgurl:"http://img.haodanku.com/7e4ae55cefff14d819c8619566b85700-600"},{son_name:"钱包",imgurl:"http://img.haodanku.com/fa179896a4e7ba6864c3a2b5c208c647-600"},{son_name:"双肩包",imgurl:"http://img.haodanku.com/a410a8f08c112bb99e3f61ba46ee0b7a-600"},{son_name:"波士顿包",imgurl:"http://img.haodanku.com/2db6a9dfe0323ab1aba9eb4d0c92b9f6-600"},{son_name:"贝壳包",imgurl:"http://img.haodanku.com/d5c5a8c3afa64c58527a68cbd46c2234-600"}]},{name:"配饰",positon:5,loadingType:0,page:0,orderList:[],banner:[{son_name:"贝雷帽",imgurl:"http://img.haodanku.com/6d5eebc640a964a4b55fb03046a2f8fb-600"},{son_name:"针织帽",imgurl:"http://img.haodanku.com/0b376d73ab661bbab0c83d8aefc50aca-600"},{son_name:"鸭舌帽",imgurl:"http://img.haodanku.com/1de98e064ef1e8dd92d4e95eda311105-600"},{son_name:"真皮腰带",imgurl:"http://img.haodanku.com/cd8ad3794ee3fbb1a8c8bce8f88f7ef1-600"},{son_name:"腰带",imgurl:"http://img.haodanku.com/7586c7f14be6334d52ea6f862048ce3a-600"},{son_name:"触屏手套",imgurl:"http://img.haodanku.com/a69d879b523d78d0203fe4879109486f-600"},{son_name:"雨伞",imgurl:"http://img.haodanku.com/eb9cb749ec8237a84227614d356bfd0f-600"},{son_name:"真丝围巾",imgurl:"http://img.haodanku.com/c371383e6e2f9b234f30d32c0a1295ef-600"},{son_name:"羊毛围巾",imgurl:"http://img.haodanku.com/2959aea355069c58f07a5bd4312c0750-600"},{son_name:"羊绒围巾",imgurl:"http://img.haodanku.com/9870a6e83a4e97ce9f8b8d2bf2fe057e-600"}]},{name:"儿童",positon:8,loadingType:0,page:0,orderList:[],banner:[{son_name:"描红本",imgurl:"http://img.haodanku.com/89a1df77f661111da350ffb31b965683-600"},{son_name:"早教机",imgurl:"http://img.haodanku.com/2ac050e8b1a787b9a1296a51edfa182a-600"},{son_name:"自行车",imgurl:"http://img.haodanku.com/54baf388a5aacb482bffba872a8393e0-600"},{son_name:"学习用品",imgurl:"http://img.haodanku.com/e1cdde128eaff4b464b02a6280128ab9-600"},{son_name:"户外玩具",imgurl:"http://img.haodanku.com/4b7d8b14035d7c42417d36037827df23-600"},{son_name:"积木",imgurl:"http://img.haodanku.com/dfb898577d5b402ee78efdf77fc753b9-600"},{son_name:"亲子玩具",imgurl:"http://img.haodanku.com/5a1f75dd01301762813b4c946f72c0bb-600"},{son_name:"玩具",imgurl:"http://img.haodanku.com/89ac36736a405eac40bd34efc223edba-600"},{son_name:"亲子装",imgurl:"http://img.haodanku.com/e892274edc543dbd443f1e1ca011e8a0-600"},{son_name:"女童外套",imgurl:"http://img.haodanku.com/3c4dbd196a8c86fd7aa7c0db67398427-600"}]},{name:"数码",positon:12,loadingType:0,page:0,orderList:[],banner:[{son_name:"保护壳",imgurl:"http://img.haodanku.com/778ee5974fe396bc6fb46241462aebd1-600"},{son_name:"耳机",imgurl:"http://img.haodanku.com/f34fd15e7a7775051a2c0f613eaa14f1-600"},{son_name:"苹果配件",imgurl:"http://img.haodanku.com/c5f7f3b8324bbc7c9394bdd2af6e7651-600"},{son_name:"鼠标键盘",imgurl:"http://img.haodanku.com/71e1a923a83a1a6ca44695c71b46bf7c-600"},{son_name:"无人机",imgurl:"http://img.haodanku.com/c372feef0f96f90efe5d1c55cacf79c3-600"},{son_name:"电脑主机",imgurl:"http://img.haodanku.com/d596eac2d096816c10881b97fbac02a9-600"},{son_name:"音响",imgurl:"http://img.haodanku.com/81f08ba219e31194566d65363173fdcf-600"}]},{name:"家电",positon:13,loadingType:0,page:0,orderList:[],banner:[{son_name:"加湿器",imgurl:"http://img.haodanku.com/086080993e964a15594f81c94d509eb8-600"},{son_name:"取暖器",imgurl:"http://img.haodanku.com/f5662ec4c72c3c7f81f8837f51255e4b-600"},{son_name:"吸尘器",imgurl:"http://img.haodanku.com/ec822582bdb343a4fcf4aa7241e76f21-600"},{son_name:"扫地机器人",imgurl:"http://img.haodanku.com/951a3f7ccf7390bbb332c697415bec48-600"},{son_name:"榨汁机",imgurl:"http://img.haodanku.com/7878d1994d35916456406cff96bd333d-600"},{son_name:"烤箱",imgurl:"http://img.haodanku.com/b1ee29313a733d944f80453a2cefa832-600"},{son_name:"电热毯",imgurl:"http://img.haodanku.com/afa97d55c0121f8bcee9dc15bf99dd72-600"},{son_name:"电饭锅",imgurl:"http://img.haodanku.com/529b946479dd79d3f86dd5d161095fad-600"},{son_name:"空气净化器",imgurl:"http://img.haodanku.com/24fc6a453206afb6a7c26d52dc64a50c-600"},{son_name:"豆浆机",imgurl:"http://img.haodanku.com/88e089532fc4b4c184ca1d596d0e3ab4-600"}]},{name:"内衣",positon:3,loadingType:0,page:0,orderList:[],banner:[]},{name:"车品",positon:15,loadingType:0,page:0,orderList:[],banner:[]},{name:"文体",positon:16,loadingType:0,page:0,orderList:[],banner:[]},{name:"宠物",positon:17,loadingType:0,page:0,orderList:[],banner:[]},{name:"其他",positon:14,loadingType:0,page:0,orderList:[],banner:[]}],currentIndex:0,isBackTop:!1,swiperList:[],mainList:[],mainList2:[],choiceList:[]}},components:{goodsItem:o.default},onLoad:function(){this.getOrderList(this.currentIndex),this.getSwiperData(),this.getMainList(),this.getMainList2(),this.getChoiceList()},onPageScroll:function(a){this.isBackTop=a.scrollTop>500},onReachBottom:function(){this.getOrderList(this.currentIndex)},methods:{getSwiperData:function(){var a=this;this.$request("/tao/banner/user/list").then((function(t){a.swiperList=t.data.data}))},getMainList:function(){var a=this;this.$request("/tao/activity/state/1").then((function(t){a.mainList=t.data.data}))},getMainList2:function(){var a=this;this.$request("/tao/activity/state/2").then((function(t){a.mainList2=t.data.data,a.mainList2.forEach((function(a){a.titleList=a.title.split("-")}))}))},getChoiceList:function(){var a=this,t="/api/get_trill_data/apikey/maxd/min_id/0/back/10/cat_id/0";this.$request(t).then((function(t){a.choiceList=t.data.data}))},handleBackTop:function(){uni.pageScrollTo({scrollTop:0,duration:500})},selectTab:function(a){this.currentIndex=a,this.scrollLeft=48*a,this.getOrderList(a)},getOrderList:function(a){var t=this,e="/api/column/apikey/maxd/type/9/back/10/min_id/".concat(this.category[a].page,"/sort/9/cid/").concat(this.category[a].positon);this.$request(e).then((function(e){console.log(e.data.data),t.category[a].page+=1,t.category[a].orderList=[].concat((0,n.default)(t.category[a].orderList),(0,n.default)(e.data.data))}))}}};t.default=c},"4c56":function(a,t,e){"use strict";e.r(t);var i=e("1e8b"),n=e.n(i);for(var o in i)"default"!==o&&function(a){e.d(t,a,(function(){return i[a]}))}(o);t["default"]=n.a},"82c4":function(a,t,e){"use strict";e.r(t);var i=e("068b"),n=e("4c56");for(var o in n)"default"!==o&&function(a){e.d(t,a,(function(){return n[a]}))}(o);e("9cb0");var c,d=e("f0c5"),m=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"b81c32a6",null,!1,i["a"],c);t["default"]=m.exports},"9cb0":function(a,t,e){"use strict";var i=e("e107"),n=e.n(i);n.a},d0ff:function(a,t,e){"use strict";function i(a,t){(null==t||t>a.length)&&(t=a.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=a[e];return i}function n(a){if(Array.isArray(a))return i(a)}e.r(t);e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("3ca3"),e("ddb0");function o(a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}e("fb6a"),e("25f0");function c(a,t){if(a){if("string"===typeof a)return i(a,t);var e=Object.prototype.toString.call(a).slice(8,-1);return"Object"===e&&a.constructor&&(e=a.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(a,t):void 0}}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(a){return n(a)||o(a)||c(a)||d()}e.d(t,"default",(function(){return m}))},d8cc:function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-b81c32a6]{background-color:#f7f7f7}.header-wrap[data-v-b81c32a6]{position:fixed;top:0;left:0;right:0;z-index:99;background-image:-webkit-linear-gradient(330deg,#f15b6c,#db0011);background-image:linear-gradient(120deg,#f15b6c,#db0011)}.header-wrap .header-category[data-v-b81c32a6]{height:%?90?%;width:100vw}.content-wrap[data-v-b81c32a6]{margin-top:%?180?%}.header-category[data-v-b81c32a6]{white-space:nowrap;position:relative;color:#fff;padding:0 %?20?%}.header-category .category-level1[data-v-b81c32a6]{margin-top:%?25?%;display:inline-block;height:%?40?%;padding:0 %?20?%}.header-category .category-level1[data-v-b81c32a6]:nth-child(1){margin-left:%?10?%}.header-category .activeCategory[data-v-b81c32a6]{color:#db0011;background-color:#fff;border-radius:%?20?%}.banner[data-v-b81c32a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?30?% %?20?% %?10?% %?20?%;background-color:#fff}.banner .banner-item[data-v-b81c32a6]{width:20%;text-align:center;margin-bottom:%?20?%}.banner .banner-item uni-image[data-v-b81c32a6]{margin:0 auto;width:%?90?%;height:%?90?%}.content-sec-wrap[data-v-b81c32a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.content-sec-wrap .content-sec-item[data-v-b81c32a6]{width:50%}.main-swiper[data-v-b81c32a6]{padding:%?10?%;background-color:#fff}.main-swiper uni-swiper-item[data-v-b81c32a6]{border-radius:%?30?%}.main-swiper uni-image[data-v-b81c32a6]{height:%?280?%}.main-list[data-v-b81c32a6]{background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% %?30?% 0;-webkit-flex-wrap:wrap;flex-wrap:wrap}.main-list .main-list-item[data-v-b81c32a6]{width:20%;margin-bottom:%?15?%}.main-list .main-list-item uni-image[data-v-b81c32a6]{width:%?100?%;height:%?100?%;margin:0 auto}.main-list .main-list-item .main-list-item-text[data-v-b81c32a6]{text-align:center;padding-top:%?10?%}.main-vip[data-v-b81c32a6]{background-color:#fff}.main-vip uni-image[data-v-b81c32a6]{margin:0 auto;width:90vw;height:%?180?%}.main-block uni-image[data-v-b81c32a6]{width:%?120?%;height:%?120?%}.main-block .block-title[data-v-b81c32a6]{font-size:%?32?%;color:#000;font-weight:600;line-height:%?52?%}.main-block .block-desc[data-v-b81c32a6]{font-size:%?24?%;color:#666;line-height:%?42?%}.main-block .block-top[data-v-b81c32a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.main-block .block-top .block-1[data-v-b81c32a6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#fff;padding:%?15?%;margin:%?10?% %?5?% %?10?% %?10?%;border-radius:%?10?%}.main-block .block-top .block-1 .block-1-title[data-v-b81c32a6]{color:#f15c6d;font-size:%?32?%;font-weight:600;padding:%?20?% 0}.main-block .block-top .block-1 .block-1-title uni-text[data-v-b81c32a6]{color:#fff;background-color:#f15c6d;font-size:%?30?%;padding:%?4?% %?6?%;margin-left:%?10?%;border-radius:%?8?%}.main-block .block-top .block-1 .block-1-desc[data-v-b81c32a6]{color:#8b91a2}.main-block .block-top .block-1 uni-image[data-v-b81c32a6]{width:%?160?%;margin:%?20?% auto 0}.main-block .block-top .block-top-right[data-v-b81c32a6]{background-color:#f7f7f7;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin:%?10?% %?10?% %?10?% %?5?%}.main-block .block-top .block-top-right .block-2[data-v-b81c32a6]{margin-bottom:%?10?%}.main-block .block-top .block-top-right .block-2 .block-desc[data-v-b81c32a6]{color:#ff8e4f}.main-block .block-top .block-top-right .block-3 .block-desc[data-v-b81c32a6]{color:#3cb8ff}.main-block .block-top .block-top-right .block-2[data-v-b81c32a6], .main-block .block-top .block-top-right .block-3[data-v-b81c32a6]{padding:%?20?% 0 %?20?% %?20?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-radius:%?10?%}.main-block .block-bottom[data-v-b81c32a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.main-block .block-bottom .block-4[data-v-b81c32a6], .main-block .block-bottom .block-5[data-v-b81c32a6], .main-block .block-bottom .block-6[data-v-b81c32a6]{background-color:#fff;width:%?235?%;padding:%?20?%}.main-block .block-bottom .block-4 uni-image[data-v-b81c32a6], .main-block .block-bottom .block-5 uni-image[data-v-b81c32a6], .main-block .block-bottom .block-6 uni-image[data-v-b81c32a6]{width:%?160?%;height:%?110?%}.main-block .block-bottom .block-4 uni-image[data-v-b81c32a6], .main-block .block-bottom .block-5 uni-image[data-v-b81c32a6], .main-block .block-bottom .block-6 uni-image[data-v-b81c32a6]{margin:0 auto}.main-title[data-v-b81c32a6]{color:#f15b6c;font-size:%?36?%;text-align:center;padding:%?20?% 0}.main-title[data-v-b81c32a6]::before, .main-title[data-v-b81c32a6]::after{content:" — "}body.?%PAGE?%[data-v-b81c32a6]{background-color:#f7f7f7}',""]),a.exports=t},e107:function(a,t,e){var i=e("d8cc");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("0a5c4721",i,!0,{sourceMap:!1,shadowMode:!1})}}]);