import config from "./config.js"
import cache from "./cache.js"

export function request(url, data= {}, method="GET") {
	uni.showLoading({
		title:"加载中"
	})
	return new Promise( (resolve, reject) => {
		uni.request({
			url: `${config.APIHOST}${url}`,
			data,
			method,
			timeout: 5000,
			header: {
				'content-type': 'application/json',
				'token': uni.getStorageSync('AuthTokens')
			},
			fail(err) {
				uni.showToast({
					title:"网络请求失败",
					icon: "none"
				}) 
				reject(err)
			},
			success(res) {	
				if(res.data.code !== 1) {
					uni.showToast({
						title:`返回数据有误 错误码：${res.data.code}`,
						icon: "none"
					}) 
				} else {
					resolve(res)
				}
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}