<template>
	<view class="goods-item-wrap" v-if="img" @click="handleClick">
		<view class="goods-item">
			<image :src="img" mode="aspectFill" class="img"></image>
			<view class="goods-item-info">
				<view class="goods-item-title">
					<text class="shop">{{shoptypeName}}</text>
					{{title}}
				</view>
				<view class="price-wrap">
					<text class="price">￥{{price}}</text>
					<text class="sales">已售{{formatSales}}</text>
				</view>
				<view class="coupon-wrap">
					<view class="coupon"><text>{{coupon}}元券</text></view>
					<text class="back">预计返￥{{cashback}}</text>
				</view>
				<view class="shop-wrap">
					<text class="iconfont icon-shop"></text>
					<text class="shopname">{{shopname}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:[
			"img","shoptype","title","price","sales","coupon","cashback", "shopname","itemid"
		],
		computed:{
			shoptypeName() {
				if(this.shoptype === "A") {
					return "拼多多"
				}else if(this.shoptype === "B") {
					return "天猫"
				} else if(this.shoptype === "C"){
					return "淘宝"
				} else if(this.shoptype === "D"){
					return "JD"
				}
			},
			formatSales() {
				if(this.sales === "10万+") {
					return this.sales
				}else if(parseInt(this.sales) > 9999) {
					return parseFloat(this.sales / 10000).toFixed(2) + "万"
				} else if(parseInt(this.sales) > 99999) {
					return "10万+"
				} else {
					return this.sales
				}
			}
		},
		methods: {
			handleClick() {
				let url;
				if(this.shoptype === "A") {
					url = `/pages/detail/pdd?id=${this.itemid}`
				}
				if(this.shoptype === "B" || this.shoptype === "C") {
					url = `/pages/detail/detail?id=${this.itemid}`
				}
				if(this.shoptype === "D") {
					url = `/pages/detail/jd?id=${this.itemid}`
				}
				uni.navigateTo({
					url
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
	padding: 0 6rpx;
}
.goods-item-title {
	.shop {
		color: #fff;
		font-size: 24rpx;
		background-color: $color-main;
		padding: 0 4rpx;
		margin-right: 12rpx;
		border-radius: 8rpx;
	}
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
.price-wrap, .coupon-wrap, .shop-wrap {
	// font-size: 24rpx;
	display: flex;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-top: 10rpx;
}
.price-wrap {
	.price {
		color: $color-main;
		width: 150rpx;
	}
}
.coupon-wrap {
	.coupon {
		width: 150rpx;
		text {
			color: #fff;
			background-color: $color-main;
			padding: 0 8rpx;
			border-radius: 8rpx;
		}
	}
}
.shop-wrap {
	padding: 10rpx 0;
	color: #999;
	.iconfont {
		font-size: 32rpx;
		padding: 0 10rpx;
	}
}
</style>
