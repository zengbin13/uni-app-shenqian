<template>
	<view class="search">
		<view class="search-header">
			<!-- #ifdef H5 -->
			<back class="back"></back>
			<view class="search-header-title">
				<text>全网超级搜</text>
			</view>
			<!-- #endif -->
			<view class="search-bar-wrap">
				<view class="search-bar">
					<input type="text" v-model="searchText" placeholder="输入关键字或粘贴宝贝标题" class="input" />
					<text class="iconfont icon-x" v-show="searchText" @click="clickCancel"></text>
					<view class="search-btn" @tap="clickSearch">
						搜索
					</view>
				</view>
			</view>
		</view>
		<view class="search-history" v-if="searchHistory.length">
			<view class="search-history-title">
				<text>搜索历史</text><text @click="clickClear">清除</text>
			</view>
			<view class="search-content">
				<view class="search-item" v-for="(item, index) in searchHistory" :key="item" @click="handleHistoryItem(index)">{{item}}</view>
			</view>
		</view>
		<view class="search-hot">
			<view class="search-history-title">
				<text>热门搜索</text>
			</view>
			<view class="search-content">
				<view class="search-item" v-for="(item, index) in keywordList" :key="index" @click="clickHotItem(index)">{{item.keyword}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keywordList: [],
				searchText: "",
				searchHistory: []
			};
		},
		onLoad() {
			this.getKeyword()
		},
		onShow() {
			// 读取历史搜索
			let history = this.$queue.getStorageData("searchHistory")
			if(!history) {
				this.$queue.setStorageData("searchHistory", [])
			} else {
				this.searchHistory = history
			}
		},
		methods: {
			// 获取关键词
			getKeyword() {
				this.$request("/api/hot_key/apikey/maxd").then(res => {
					this.keywordList = res.data.data
				})
			},
			//点击取消
			clickCancel() {
				this.searchText = ""
			},
			// 点击清除
			clickClear() {
				this.searchHistory = []
				this.$queue.removeStorageData("searchHistory")
			},
			// 点击热门搜索
			clickHotItem(index) {
				this.searchText = this.keywordList[index].keyword
				this.clickSearch()
			},
			// 点击历史搜索
			handleHistoryItem(index){
				this.searchText = this.searchHistory[index]
				this.clickSearch()
			},
			// 点击搜索
			clickSearch() {
				if(!this.searchText) {
					uni.showToast({
						icon:"none",
						title:"搜索数据不能为空"
					})
				}
				// 读取缓存
				let history = this.$queue.getStorageData("searchHistory") || []
				// 判断是否已经存在
				let flag = this.searchHistory.find(item => {
					return this.searchText === item
				})
				if(!flag) {
					history.push(this.searchText)
				}
				this.searchHistory = history
				this.$queue.setStorageData("searchHistory", history)
				// 跳转搜索结果页面
				uni.navigateTo({
					url:`/pages/search/search-content?keyword=${this.searchText}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}
	.search-header {
		/* #ifdef H5 */
		background-image: linear-gradient(90deg, $color-sec1, $color-main);
		/* #endif */
		/* #ifndef H5 */
		background-image: linear-gradient(90deg, $color-main, $color-main);
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
	.search-bar-wrap {
		padding: 40rpx 0;
	}
	.search-bar {
		margin: 0 auto;
		background-color: #fff;
		width: 80%;
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
	.search-history-title {
		display: flex;
		justify-content: space-between;
		padding: 30rpx;
		text {
			font-size: 30rpx;
			font-weight: bolder;
		}
	}
	.search-content {
		display: flex;
		flex-wrap: wrap;
		padding: 0 30rpx;
		.search-item {
			line-height: 50rpx;
			border-radius: 25rpx;
			padding: 0 20rpx;
			color: #666;
			background-color: #f6f6f6;
			margin:0 40rpx 40rpx 0;
		}
	}
</style>
