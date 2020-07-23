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
			header: {
				token: this.$queue.getStorageData("token")
			},
			method,
			timeout: 5000,
			fail(err) {
				uni.showToast({
					title:"网络请求失败",
					icon: "none"
				}) 
				reject(err)
			},
			success(res) {
				if(res.data.code === undefined && res.data.msg === undefined) {
					resolve(res)
					return;
				}
				let code = res.data.code
				let msg = res.data.msg.toUpperCase()
				if(msg !=="SUCCESS" && code !== 1 ) {
					console.log(res);
					uni.showToast({
						title:`错误码：${code}  错误信息：${msg}`,
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