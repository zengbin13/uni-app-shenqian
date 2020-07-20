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
				<!-- 淘宝数据 -->
				<block v-for="(item, index) in tabList[currentTab].data" :key="index">
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
					name: '热销',
					data: [],
					sort:4
				},
				{
					name: '最新',
					data: [],
					sort:0
				},
				{
					name: '超低价',
					data: [],
					sort:1
				},
				{
					name: '高佣金',
					data: [],
					sort:5
				},
				{
					name: '大额券',
					data: [],
					sort:3
				}
			],
			category: ['热门', '女装', '男装', '内衣', '美妆', '配饰', '鞋品', '箱包', '儿童', '母婴', '居家', '美食', '数码', '家电', '其他', '车品', '文体', '宠物'],
			page: 1,
			min_id: 1,
			cid: 0,
			type: 9,
			sort: 4
		};
	},
	onLoad(e) {
		this.cid = e.cid;
		uni.setNavigationBarTitle({
			title:`推荐${this.category[this.cid] || ''}`
		})
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
			let url = `/api/column/apikey/maxd/type/${this.type}/back/10/sort/${this.sort}/min_id/${this.min_id}/cid/${this.cid}`;
			this.$request(url).then(res => {
				let resList = res.data.data;
				// 改变请求参数
				this.min_id = res.data.min_id;
				this.page = res.data.min_id;
				// 修正获得的数据
				resList.forEach(item => {
					item.tkmoney = (item.itemendprice * (item.tkrates * 0.01) * this.grade).toFixed(2);
				});
				// 保存数据
				this.tabList[this.currentTab].data = [...this.tabList[this.currentTab].data, ...resList];
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
