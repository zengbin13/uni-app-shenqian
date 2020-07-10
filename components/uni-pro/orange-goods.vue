<template>
	<view class="goods">
		<view class="goods-title">
			<view class="title-left">
				<image src="../../static/img/common/logo.jpg"></image>
				<text>省钱君</text>
			</view>
		</view>
		<view class="goods-desc">
			<view v-html="goods.copy_text"></view>
		</view>
		<view class="goods-imgs">
			<block v-for="item in goods.item_data" :key="item.product_id">
				<view class="img-wrap">
					<image :src="item.itempic" mode="aspectFill" @click="openGoods(item.itemid)"></image>
					<block v-if="item.itemendprice">
						<text>券后价:{{item.itemendprice}}</text>
					</block>
				</view>
			</block>
		</view>
		<view class="goods-info">
			<view class="time">
				{{goods.addtime | formatDate}}
			</view>
			<view class="total">
				已分享{{goods.share_times}}次
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
		props: {
			goods: {
				type:Object,
				default: {}
			}
		},
		methods:{
			openGoods(id) {
				//导航加入详情页面
				if(!id) return
				let relation_id = this.$queue.getStorageData("relation_id")
				if(relation_id) {
					uni.navigateTo({
						 url:`/pages/detail/detail?id=${id}&relation_id=${relation_id}`
					})
				} else {
					uni.navigateTo({
						 url:`/pages/detail/detail?id=${id}`
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
		},
		created() {
			console.log(this.goods);
		}
	}
</script>

<style lang="scss" scoped>
	.goods {
		padding: 30rpx 30rpx;
		border-bottom: 1px solid rgb(246, 246, 246);
	}
	.goods-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80rpx;
		.title-left {
			display: flex;
			align-items: center;
			image {
				display: inline-block;
				height: 70rpx;
				width: 70rpx;
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
	.goods-desc {
		text-align: left;
		font-size: 30rpx;
	}
	.goods-imgs {
		display: flex;
		flex-wrap: wrap;
		padding: 30rpx 0;
		.img-wrap {
			position: relative;
			text {
				position: absolute;
				padding: 0 4rpx;
				left: 0rpx;
				bottom: 6rpx;
				background-color: rgb(252, 63, 120);
				color: #fff;
			}
		}
		image {
			width: 200rpx;
			height: 200rpx;
			padding: 0 6rpx 6rpx 0;
		}
	}
	.goods-info {
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
