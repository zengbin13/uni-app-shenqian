<template>
	<view class="goods-item-wrap" v-if="goodsInfo" @click="handleClick">
		<view class="goods-item">
			<image :src="goodsInfo.itempic" mode="aspectFill" class="img"></image>
			<view class="goods-item-info">
				<view class="goods-item-title">
					<image src="../../static/img/mao.png" mode="aspectFill" v-if="goodsInfo.shoptype === 'B'" class="shop"></image>
					<image src="../../static/img/taobao.png" mode="aspectFill" v-else class="shop"></image>
					{{goodsInfo.itemtitle}}
				</view>
				<view class="cash-back">
					<text class="cash-back-item1">预估返￥{{cashBack}}</text>
					<text class="cash-back-item2">最高返￥{{highestCashBack}}</text>
				</view>
				<view class="desc">
					<text class="itemprice">￥{{goodsInfo.itemprice}}</text>
					<text class="sale">已销{{sale}}件</text>
				</view>
				<view class="price">
					<text class="itemendprice">￥<text>{{goodsInfo.itemendprice}}</text></text>
					<text class="coupon">{{goodsInfo.couponmoney}}元券</text>
				</view>
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
		props:{
			goodsInfo:{
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		computed:{
			cashBack() {
				return parseFloat(this.goodsInfo.tkmoney * 0.3).toFixed(2)
			},
			highestCashBack() {
				return parseFloat(this.goodsInfo.tkmoney * 0.7).toFixed(2)
			},
			sale() {
				if(this.goodsInfo.itemsale < 9999) {
					return this.goodsInfo.itemsale
				} else {
					return parseFloat(this.goodsInfo.itemsale / 10000).toFixed(2) + "万"
				}
			}
		},
		methods: {
			handleClick() {
				console.log(this.goodsInfo);
				// 添加历史记录
				let browseItem = {
					img:this.goodsInfo.itempic,
					shoptype:this.goodsInfo.shoptype,
					title:this.goodsInfo.itemtitle,
					price:this.goodsInfo.itemprice,
					sales:this.goodsInfo.itemsale,
					coupon:this.goodsInfo.couponmoney,
					cashback:this.goodsInfo.tkmoney,
					shopname:this.goodsInfo.shopname,
					itemid:this.goodsInfo.itemid
				}
				let taobaoBrowseList = this.$queue.getStorageData("taobaoBrowseList") || []
				let flag = taobaoBrowseList.find(item => item === browseItem)
				if(!flag) {
					taobaoBrowseList.push(browseItem)
					if(taobaoBrowseList.length > 100) {
						taobaoBrowseList.splice(0, 1)
					}
					this.$queue.setStorageData("taobaoBrowseList", taobaoBrowseList)
				}
				// 导航跳转
				uni.navigateTo({
					url:`/pages/detail/detail?id=${this.goodsInfo.itemid}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.goods-item-wrap {
	background-color: rgb(240,240,240);
	padding: 8rpx;
	.goods-item {
		border-radius: 20rpx;
		background-color: #fff;
		overflow: hidden;
		box-shadow: 4rpx 4rpx 12rpx 0 rgba(0,0,0,.1);
	}
}
.img {
		height:400rpx;
	}
.goods-item-info {
	.shop {
		width: 28rpx;
		height:28rpx;
		display: inline-block;
		margin: 0 6rpx;
		position: relative;
		top:5rpx;
	}
	.goods-item-title {
		padding: 8rpx 8rpx 0;
		line-height: 42rpx;
		// 单行省略号
		// overflow: hidden;
		// text-overflow: ellipsis;
		// white-space: nowrap;
		//多行省略号
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.cash-back, .price, .desc {
		padding: 0 8rpx;
		display: flex;
		justify-content: space-between;
	}
	.cash-back {
		padding: 8rpx 8rpx 6rpx;
		font-size: 20rpx;
		color: #fff;
		.cash-back-item1, .cash-back-item2 {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			padding: 2rpx 6rpx;
		}
		.cash-back-item1 {
			background-color: $color-main;
		}
		.cash-back-item2 {
			background-color: rgb(255, 146, 124);
		}
	}
	.desc {
		font-size: 24rpx;
		.itemprice {
			text-decoration: line-through;
			color: #999;
		}
		.sale {
			color: #666;
		}
	}
	.price {
		padding: 8rpx 8rpx 14rpx;
		.itemendprice {
			color: $color-main;
			text {
				font-size: 32rpx;
				font-weight: 600;
			}
		}
		.coupon {
			color: #fff;
			background-color: $color-sec2;
			text-align: center;
			height: 40rpx;
			line-height: 40rpx;
			font-size: 24rpx;
			padding: 0 20rpx;
			position: relative;
			box-shadow: 4rpx 4rpx 12rpx 0 rgba(0,0,0,.1);
			&::before, &::after {
				content: "";
				width: 20rpx;
				height: 20rpx;
				border-radius: 50%;
				background-color: #fff;
				position: absolute;
				top: 50%;
				transform:translateY(-50%)
			}
			&::before {
				left: -10rpx;
				
			}
			&::after {
				right: -10rpx;
			}
		}
	}
	
}
</style>
