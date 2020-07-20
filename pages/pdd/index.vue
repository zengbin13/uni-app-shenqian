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
				<block v-for="(item, index) in tabList[currentTab].data" :key="index">
					<goods-item-plus
						class="goods-item"
						:img="item.goodsImageUrl"
						shoptype="A"
						:title="item.goodsDesc"
						:price="item.itemendprice"
						:sales="item.salesTip"
						:coupon="item.couponmoney"
						:cashback="item.tkmoney"
						:shopname="item.mallName"
						:itemid="item.goodsId"
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
					name: '实时热销榜',
					data: [],
					sort: 1,
				},
				{
					name: '实时收益榜',
					data: [],
					sort: 2,
				}
			],
			page: 1,
			min_id: 0,
			isInvitation: 0,
			cid: 0,
			cat_id: 0,
			sort: 4,
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
			let url = `/tao/pdd/query/sortType/${this.tabList[this.currentTab].sort}/page/${this.page}/pageSize/10`;
			this.$request(url).then(res => {
				let resList = res.data.topGoodsListGetResponse.list;
				// 改变请求参数
				this.min_id = res.data.min_id;
				this.page += 1;
				// 修正获得的数据
				resList.forEach(item => {
					item.itemprice = (item.minGroupPrice * 0.01).toFixed(2);
					item.itemendprice = ((item.minGroupPrice - item.couponDiscount) * 0.01).toFixed(2);
					item.tkmoney = ((item.minGroupPrice - item.couponDiscount) * 0.01 * (item.promotionRate * 0.001) * this.grade).toFixed(2);
					item.couponmoney = (item.itemprice - item.itemendprice).toFixed(0)
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
	top: 88rpx;
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
	padding: 0 60rpx;
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
