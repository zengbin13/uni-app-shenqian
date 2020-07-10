<template>
	<view class="feedback">
		<view class="form-item">
			<view class="form-item-title">
				<view>问题和意见</view>
				<view @tap="quickInput">快速键入<text class="iconfont icon-right"></text></view>
			</view>
			<textarea :value="problem" placeholder="请详细描述你的问题和意见..." class="form-item-content problem"/>
		</view>
		<view class="form-item">
			<view class="form-item-title">
				<view>QQ/邮箱</view>
			</view>
			<input :value="address" placeholder="方便我们联系你" class="form-item-content address"/>
		</view>
		<view class="form-item">
			<view class="form-item-title">
				<view>应用评分</view>
				<uni-rate size="18" value="5" @change="changeStar"></uni-rate>
			</view>
			<button form-type="submit" class="submit" @tap="submit">提交</button>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-ui/uni-rate/uni-rate.vue'
	export default {
		data() {
			return {
				problem: "",
				address: "",
				itemList: [
					"界面显示错乱 ",
					"启动缓慢，卡出翔了",
					"UI无法直视，丑哭了",
					" 偶发性崩溃 "
				],
				star: 5
			}
		},
		methods: {
			 quickInput() {
				 uni.showActionSheet({
				 	itemList: this.itemList,
					success: (e) => {
						this.problem = this.itemList[e.tapIndex]
					}
				 })
			 },
			 changeStar(e) {
				 this.star = e.value
			 },
			 submit() {
				 if(!problem) {
					 uni.showToast({
					 	title:"问题描述不能为空"
					 })
				 }
				 if(!address) {
						 uni.showToast({
							title:"联系地址不能为空"
						 })
				 }
				 
			 }
		},
		components: {
			uniRate
		}
	}
</script>

<style lang="scss" scoped>
.feedback {
	padding: 0 30rpx;
}
.form-item-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 32rpx;
	color: #777;
	height: 90rpx;
}
.form-item-content {
	width: 100%;
	padding: 20rpx;
	background-color: #fff;
	border-radius: 20rpx;
	font-size: 32rpx;
}
.address {
	height: 90rpx;
}
.submit {
	background-color: $color-main;
	color: #fff;
}
</style>
