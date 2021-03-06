import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//uni-color
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

//绑定在vue原型上的方法
import { request } from "./common/httpRequest.js"
Vue.prototype.$request = request
import  queue  from "./common/queue.js"
Vue.prototype.$queue = queue

// 注册全局组件
import goodsItem from "./components/goods-item/goods-item.vue"
Vue.component('goods-item', goodsItem)
import goodsIndex from "./components/goods-index/goods-index.vue"
Vue.component('goods-index', goodsIndex)
import goodsItemPlus from "./components/goods-item-plus/goods-item-plus.vue"
Vue.component('goods-item-plus', goodsItemPlus)
import backTop from '@/components/back-top/back-top.vue';
Vue.component('back-top', backTop)
import cell from '@/components/cell/cell.vue';
Vue.component('cell', cell)
import searchBar from '@/components/search-bar/search-bar.vue';
Vue.component('search-bar', searchBar)
import back from '@/components/back/back.vue';
Vue.component('back', back)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
