export default {
	getStorageData(key) {
		try{
			let value = uni.getStorageSync(key)
			if(value) {
				return JSON.parse(value)
			}
		}catch(e){
			//TODO handle the exception
		}
	},
	setStorageData(key, value) {
		try{
			uni.setStorageSync(key, value)
		}catch(e){
			//TODO handle the exception
		}
	},
	//检测某条数据在队列中是否存在
	isExist(key, id) {
		let list = this.getStorageData(key)
		if(!Array.isArray(list)) return
		return list.find(item => item.itemid === id)
	}
}