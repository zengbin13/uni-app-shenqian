export default {
	getStorageData(key) {
		try{
			let value = uni.getStorageSync(key)
			if(value) return
		}catch(e){
			//TODO handle the exception
		}
	}
}