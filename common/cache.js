// 关于缓存数据的处理函数
let postfix = "_mallstore" //缓存数据后缀名


//添加缓存数据
function set(key, value, time) {
	uni.setStorageSync(key, value)
	let seconds = parseInt(time)
	if (seconds > 0) {
		let timestamp = Date.parse(new Date())
		timestamp = timestamp / 1000 + seconds;
		uni.setStorageSync(key + postfix, timestamp + '')
	} else {
		uni.removeStorageSync(key + postfix)
	}
}

//获取缓存数据
function get(key) {
	let deadTime = parseInt(uni.getStorageSync(key + postfix))
	let newTime = Date.parse(new Date()) / 1000
	if(deadTime && deadTime < newTime) {
		uni.removeStorageSync(key + postfix)
		uni.removeStorageSync(key)
		return false
	} else {
		return uni.getStorageSync(key)
	}
}

//清除缓存数据
function remove(key) {
	uni.removeStorageSync(key + postfix)
	uni.removeStorageSync(key)
}

//清除全部缓存数据
function clear() {
	uni.clearStorageSync()
}

export default {
	set,
	get,
	remove,
	clear
}
