<template>
	<view class="search">
		<view class="search-header">
			<!-- #ifdef H5 -->
			<back class="back"></back>
			<!-- #endif -->
			<view class="search-bar">
				<input type="text" v-model="searchText" placeholder="输入关键字或粘贴宝贝标题" class="input" />
				<text class="iconfont icon-x" v-show="searchText" @click="clickCancel"></text>
				<view class="search-btn" @tap="clickSearch">搜索</view>
			</view>
		</view>
		<view class="tablist">
			<view class="tablist-item" v-for="(tabListItem, index) in tabList" :key="index" :class="{ 'tablist-item-active': index === currentTab }" @click="toggleTabList(index)">
				{{ tabListItem.name }}
			</view>
		</view>
		<view class="tab">
			<view class="tab-item" v-for="(tabItem, indey) in tab" :key="indey" :class="{ 'tab-item-active': indey === currentTabItem }" @click="toggleTab(indey)">
				{{ tabItem.name }}
			</view>
		</view>
		<view class="content">
			<view class="content-main" v-if="showList.length">
				<block v-for="(item, index) in showList" :key="index">
					<goods-item-plus class="goods-item"  :img="item.goodsImageUrl" shoptype="B" :title="item.goodsDesc" :price="item.itemendprice" :sales="item.salesTip" :coupon="(item.itemprice - item.itemendprice).toFixed(0)" :cashback="item.tkmoney" :shopname="item.mallName" :itemid="item.goodsId"></goods-item-plus>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			grade: 1,
			showList: [],
			searchText: '衣服',
			currentTab: 0,
			currentTabItem: 0,
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
			tab: [
				{
					name: '热销',
					position: 2,
					pdd: 6,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '综合',
					position: 0,
					pdd: 0,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '最新',
					position: 1,
					pdd: 12,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '高佣',
					position: 6,
					pdd: 14,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '低价',
					position: 4,
					pdd: 9,
					jd: 5,
					total: 0,
					data: []
				}
			],
			tabData: [
				{
					name: '热销',
					position: 2,
					pdd: 6,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '综合',
					position: 0,
					pdd: 0,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '最新',
					position: 1,
					pdd: 12,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '高佣',
					position: 6,
					pdd: 14,
					jd: 5,
					total: 0,
					data: []
				},
				{
					name: '低价',
					position: 4,
					pdd: 9,
					jd: 5,
					total: 0,
					data: []
				}
			],
			min_id: 1,
			taobaoSort: 2,
			taobaoPage: 1,
			pddSort: 6,
			pddPage:1,
			jdSort: 5,
			jdPage: 1,
		};
	},
	onLoad(e) {
		if(e.keyword) {
			this.searchText = e.keyword;
		}
		this.grade = this.$queue.getStorageData("grade") || 0.7
		// 请求数据
		this.getTaobaoList()
	},
	methods: {
		//点击取消
		clickCancel() {
			this.searchText = ""
		},
		clickSearch() {
			if(!this.searchText) {
				uni.showToast({
					icon:"none",
					title:"搜索内容不能为空"
				})
			}
			if(this.currentTab === 0) {
				this.getTaobaoList()
			}
			if(this.currentTab === 1) {
				this.getPddList()
			}
			if(this.currentTab === 2) {
				this.getJdList()
			}
		},
		getTaobaoList() {
			let url = `/api/supersearch/apikey/maxd/keyword/${this.searchText}/back/20/sort/${this.taobaoSort}/min_id/${this.min_id}/is_coupon/1/tb_p/${this.taobaoPage}`;
			this.$request(url).then(res => {
				let resList = res.data.data
				console.log(resList);
				this.showList = resList
			});
		},
		getPddList() {
			let url = `/tao/pdd/list/keyword/${this.pddSort}/page/${this.pddPage}/pageSize/20?keyword=${this.searchText}`;
			this.$request(url).then(res => {
				let resList = res.data.goodsSearchResponse.goodsList
				resList.forEach(item => {
					item.itemprice = (item.minGroupPrice * 0.01).toFixed(2)
					item.itemendprice = ((item.minGroupPrice - item.couponDiscount) * 0.01).toFixed(2);
					item.tkmoney = ((((item.minGroupPrice - item.couponDiscount) * 0.01) * (item.promotionRate * 0.001)) * this.grade).toFixed(2);
				})
				console.log(resList);
				this.showList = resList		
			})
		},
		getJdList() {
			let url = `/tao/jd/goods/list/${this.jdPage}?sortName=${this.jdSort}&keywords=${this.searchText}`;
			this.$request(url).then(res => {
				console.log(res.data.data);
			});
		},
		toggleTabList(index) {
			this.currentTab = index;
		},
		toggleTab(indey) {
			this.currentTabItem = indey;
		}
	}
};
</script>

<style lang="scss" scoped>
.search-header {
	padding-top: 30rpx;
	height: 150rpx;
	/* #ifdef H5 */
	background-image: linear-gradient(90deg, $color-sec1, $color-main);
	/* #endif */
	/* #ifndef H5 */
	background-color: $color-main;
	/* #endif */
	.back {
		color: #fff;
	}
	.search-header-title {
		text-align: center;
		font-size: 30rpx;
		height: 130rpx;
		line-height: 130rpx;
		color: #fff;
		letter-spacing: 0.05rem;
	}
}
.search-bar {
	margin: 0 auto;
	background-color: #fff;
	width: 70%;
	padding: 0 40rpx;
	border-radius: 35rpx;
	position: relative;
	line-height: 70rpx;
	.input {
		background-color: #fff;
		height: 70rpx;
	}
	.iconfont {
		position: absolute;
		top: 0;
		right: 130rpx;
		color: $color-main;
		z-index: 99;
	}
	.search-btn {
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		color: #fff;
		border-radius: 35rpx;
		width: 120rpx;
		background-color: #ffb925;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 98;
	}
}
.tablist {
	display: flex;
	justify-content: space-evenly;
	background-color: #fff;
	padding-bottom: 10rpx;
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
.tab {
	display: flex;
	justify-content: space-evenly;
	background-color: #fff;
	padding: 0 120rpx 10rpx;
	.tab-item {
		height: 60rpx;
		line-height: 60rpx;
		padding: 0 10rpx;
	}
	.tab-item-active {
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
