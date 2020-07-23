<template>
	<view>
		<view class="fixed">
			<view class="tablist">
				<view class="tablist-item" v-for="(tabListItem, index) in tabList" :key="index" :class="{ 'tablist-item-active': index === currentTab }" @click="toggleTabList(index)">
					{{ tabListItem.name }}
				</view>
			</view>
		</view>
		<view class="content">
			<view class="content-main">
				<block v-for="(item, index) in tabList[currentTab].data" :key="index" >
					<goods-item-plus
						class="goods-item"
						:img="item.itempic"
						:shoptype="item.shoptype"
						:title="item.itemtitle"
						:price="item.itemprice"
						:sales="item.itemsale"
						:coupon="item.couponmoney"
						:cashback="item.tkmoney"
						:shopname="item.shopname"
						:itemid="item.itemid"
					></goods-item-plus>
				</block>
			</view>
		</view>

		<!-- backtop -->
		<back-top @backtop="handleBackTop" :active="isBackTop"></back-top>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isBackTop: false,
			grade: 0,
			currentTab: 0,
			tabList: [
				{
					name: '实时销量榜',
					data: [],
					sort: 1,
				},
				{
					name: '今日爆单榜',
					data: [],
					sort: 2,
				},
				{
					name: '昨日爆单榜',
					data: [],
					sort: 3,
				},
				{
					name: '出单指数榜',
					data: [],
					sort: 4,
				}
			],
			page: 1,
			min_id: 0,
			cat_id: 0
		};
	},
	onLoad(e) {
		this.grade = this.$queue.getStorageData('grade') || 0.7;
		// // 请求数据
		this.getGoodsList()
	},
	onPageScroll(e) {
		this.isBackTop = e.scrollTop > 500;
	},
	onReachBottom() {
		this.getGoodsList()
	},
	methods: {
		//回到顶部
		handleBackTop() {
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 500
			});
		},
		getGoodsList() {
			let url = `/api/sales_list/apikey/maxd/sale_type/${this.tabList[this.currentTab].sort}/back/10/min_id/${this.page}/cid/0`;
			this.$request(url).then(res => {
				let resList = res.data.data;
				// 改变请求参数
				this.page = res.data.min_id;
				// 修正获得的数据
				resList.forEach(item => {
					item.tkmoney = (item.itemendprice * (item.tkrates * 0.01) * this.grade).toFixed(2);
				});
				// 保存数据
				this.tabList[this.currentTab].data = [...this.tabList[this.currentTab].data, ...resList]
			});
		},
		toggleTabList(index) {
			this.currentTab = index;
			this.getGoodsList()
			this.handleBackTop();
			// 请求数据
		}
	}
};
</script>

<style lang="scss" scoped>
.fixed {
	position: fixed;
	/* #ifdef H5 */
	top: 80rpx;
	/* #endif */
	/* #ifndef H5 */
	top: 0;
	/* #endif */
	left: 0;
	right: 0;
	background-color: #fff;
	z-index: 99;
}
.content {
	margin-top: 90rpx;
}

.tablist {

	display: flex;
	justify-content: space-evenly;
	background-color: #fff;
	padding-bottom: 10rpx;
	.tablist-item {
		height: 80rpx;
		line-height: 80rpx;
		// padding: 0 20rpx;
		font-size: 32rpx;
	}
	.tablist-item-active {
		color: $color-main;
		border-bottom: 4rpx solid $color-sec1;
	}
}
.content-main {
	display: flex;
	flex-wrap: wrap;
	.goods-item {
		width: 50%;
	}
}
</style>
