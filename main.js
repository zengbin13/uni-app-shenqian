import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//uni-color
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

//绑定在vue原型上的方法
import { request } from "./common/httpRequest.js"
Vue.prototype.$request = request


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
