<template>
	<view class="handpick">
		<view class="handpick-title">
			<view class="title-left">
				<image src="../../static/img/common/logo.jpg" mode="aspectFill" ></image>
				<text>省钱君</text>
			</view>
			<view class="title-right" @click="openGoods">
				立即领券
			</view>
		</view>
		<view class="handpick-desc">
			<view v-html="handpickData.show_content"></view>
		</view>
		<view class="handpick-imgs">
			<block v-for="item in handpickData.itempic" :key="item">
				<image :src="item" mode="aspectFill" @click="openGoods"></image>
			</block>
		</view>
		<view class="handpick-info">
			<view class="time">
				{{handpickData.show_time | formatDate}}
			</view>
			<view class="total">
				已被领取{{handpickData.dummy_click_statistics}}次
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		// created() {
		// 	console.log(this.handpickData);
		// },
		props: {
			handpickData: {
				type:Object,
				default: {}
			}
		},
		methods:{
			openGoods() {
				//导航加入详情页面
				let relation_id = this.$queue.getStorageData("relation_id")
				if(relation_id) {
					uni.navigateTo({
						 url:`/pages/detail/detail?id=${this.handpickData.itemid}&relation_id=${relation_id}`
					})
				} else {
					uni.navigateTo({
						 url:`/pages/detail/detail?id=${this.handpickData.itemid}`
					})
				}
			}
		},
		filters:{
			formatDate(value) {
				value = parseInt(value) * 1000
				let date = new Date(value)
				let YY, MM, DD, hh, mm, ss
				YY = date.getFullYear()
				MM = date.getMonth() + 1
				MM = MM < 10 ? `0${MM}` : MM
				DD = date.getDate()
				hh = date.getHours()
				mm = date.getMinutes()
				ss = date.getSeconds()
				return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`
			}
		}
	}
</script>

<style lang="scss" scoped>
	.handpick {
		padding: 30rpx 30rpx;
		border-bottom: 1px solid rgb(246, 246, 246);
	}
	.handpick-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80rpx;
		.title-left {
			display: flex;
			align-items: center;
			image {
				display: inline-block;
				width: 70rpx;
				height: 70rpx;
				position: relative;
				bottom: 10rpx;
			}
			text {
				padding: 0 20rpx;
			}
		}
		.title-right {
			border: 1px solid rgb(252, 63, 120);
			color: rgb(252, 63, 120);
			padding: 4rpx 16rpx;
			border-radius: 32rpx;
		}
	}
	.handpick-desc {
		text-align: left;
		font-size: 30rpx;
	}
	.handpick-imgs {
		display: flex;
		flex-wrap: wrap;
		padding: 30rpx 0;
		image {
			width: 200rpx;
			height: 200rpx;
			border-right: 6rpx solid #fff;
			border-bottom: 6rpx solid #fff;
			background-color: rgb(246, 246, 246);
		}
	}
	.handpick-info {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		color: #999999;
		.total {
			padding-left: 30rpx;
		}
	}
</style>
