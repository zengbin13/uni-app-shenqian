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
				reject(err)
			},
			success(res) {
				resolve(res)
			},
			complete() {
				uni.hideLoading()
			}
		})
	})
}