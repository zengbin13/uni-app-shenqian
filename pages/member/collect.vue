<template>
	<view class="footprint">
		<view class="tablist">
			<view class="tablist-item" v-for="(tabListItem, index) in tabList" :key="index" :class="{ 'tablist-item-active': index === currentTab }" @click="toggleTabList(index)">
				{{ tabListItem.name }}
			</view>
		</view>
		<view class="content-wrap">
			<view class="message">
				{{message}}
			</view>
			<view class="content" v-if="dataList.length">
				<block v-for="(item, index) in dataList" :key="index">
					<goods-item-plus
						class="goods-item"
						:img="item.img"
						:shoptype="item.shoptype"
						:title="item.title"
						:price="item.price"
						:sales="item.sales"
						:coupon="item.coupon"
						:cashback="item.cashback"
						:shopname="item.shopname"
						:itemid="item.itemid"
					></goods-item-plus>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 0,
				tabList: [
					{
						position: 'tb',
						name: '淘宝'
					},
					{
						position: 'pdd',
						name: '拼多多'
					},
					{
						position: 'jd',
						name: '京东'
					}
				],
				message: "提示: 收藏最多保存100个宝贝，如果超出100个宝贝，如果此时收藏了新的宝贝，最末尾的宝贝将会自动删除",
				taobaoCollect: [],
				pddCollect: [],
				jdCollect: []
			}
		},
		onShow() {
			this.taobaoCollect = this.$queue.getStorageData("taobaoCollect") || []
			this.pddCollect = this.$queue.getStorageData("pddCollect") || []
			this.jdCollect = this.$queue.getStorageData("jdCollect") || []
		},
		computed:{
			dataList() {
				if(this.currentTab === 0) {
					return this.taobaoCollect
				}
				if(this.currentTab === 1) {
					return this.pddCollect
					console.log(this.pddCollect);
				}
				if(this.currentTab === 2) {
					return this.jdCollect
					console.log(this.jdCollect);
				}
			}
		},
		methods:{
			toggleTabList(index) {
				this.currentTab = index
			}
		}
	}
</script>

<style lang="scss" scoped>
.footprint {
	position: relative;
}
.tablist {
		display: flex;
		justify-content: space-evenly;
		background-color: #fff;
		padding-bottom: 4rpx;
		position: fixed;
		/* #ifdef MP-WEIXIN */
		top: 0rpx;
		/* #endif */
		/* #ifndef MP-WEIXIN */
		top: 88rpx;
		/* #endif */
		left: 0;
		right: 0;
		z-index: 20;
		zoom: 1;
		.tablist-item {
			height: 80rpx;
			line-height: 80rpx;
			padding: 0 20rpx;
			font-size: 32rpx;
		}
		.tablist-item-active {
			color: $color-main;
			border-bottom: 4rpx solid $color-sec1;
		}
	}
.content-wrap {
	margin-top: 88rpx;
}
.message {
	padding: 30rpx;
	color: #999;
	line-height: 32rpx;
	font-size: 26rpx;
}
.content {
	display: flex;
	flex-wrap: wrap;
	.goods-item {
		width: 50%;
	}
}
</style>
