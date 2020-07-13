export default {
	// 获取某条缓存数据
	getStorageData(key) {
		try{
			let value = uni.getStorageSync(key)
			return value
		}catch(e){
			//TODO handle the exception
		}
	},
	// 获取某条缓存数据——json
	getStorageJsonData(key) {
		try{
			let value = uni.getStorageSync(key)
			if(typeof value === "object") {
				return JSON.parse(value)
			} else {
				return value
			}
		}catch(e){
			//TODO handle the exception
		}
	},
	// 添加某条缓存数据
	setStorageData(key, value) {
		try{
			uni.setStorageSync(key, value)
		}catch(e){
			//TODO handle the exception
		}
	},
	// 清除某条缓存数据
	removeStorageData(key) {
		try{
			uni.removeStorageSync(key)
		}catch(e){
			//TODO handle the exception
		}
	},
	//检测某条子数据在缓存数组中是否存在
	isExist(key, id) {
		let list = this.getStorageData(key)
		if(!Array.isArray(list)) return
		return list.find(item => item.itemid === id)
	},
	// 清除缓存中的登录数据
	clearLogin() {
		this.removeStorageData("token");
		this.removeStorageData("userId");
		this.removeStorageData("nickName");
		this.removeStorageData("image_url");
		this.removeStorageData("relation_id");
		this.removeStorageData("mobile");
	}
}