<template>
	<view class="content-wrap">
		<view class="color-bg">
			<view class="login" @tap="login">
				<image :src="avatarUrl" mode="aspectFill"></image>
				<view class="username">{{nickName}}</view>
			</view>
			<view class="vip-application">
				<view class="vip-left">
					<text class="iconfont icon-huiyuan"></text>
					会员购买商品享省钱+返现
				</view>
				<view class="vip-right" @click="handleApplication">
					会员申请
				</view>
			</view>
			<view class="arc">
				<image src="../../static/img/arc.png"></image>
			</view>
		</view>
		<view class="content">
			<view class="order">
				<cell>全部订单明细</cell>
				<view class="order-detail">
					<view class="order-item" v-for="(item, index) in orderList" :key="item.id" @click="handleOrderItem(index)">
						<text class="order-number">{{item.number + ' ' + item.unit}}</text>
						<text class="order-desc">{{item.title}}</text>
					</view>
				</view>
			</view>
			<view class="message">
				{{message}}
				<text class="iconfont icon-xiaoxi"></text>
			</view>
			<view class="menu">
				<cell iconName="icon-lishi" iconColor="#5eba8f" url="/pages/member/footprint">浏览历史</cell>
				<cell iconName="icon-star-opp" iconColor="#54b4ef" url="/pages/member/collect">我的收藏</cell>
				<view @click="promote">
					<cell iconName="icon-tuiguang" iconColor="#f7d888" info="邀好友拿高佣">推广中心</cell>
				</view>
				<cell iconName="icon-anquan" iconColor="#9789f7">账号安全</cell>
				<cell iconName="icon-kefu12" iconColor="#ff3333">联系客服</cell>
				<cell iconName="icon-awesome" iconColor="#00ecec">APP下载</cell>
				<cell iconName="icon-fankui1" iconColor="#00ff7f" url="/pages/member/feedback">意见反馈</cell>
					<cell iconName="icon-shezhi" iconColor=" #5555ff" url="/pages/member/setting">设置中心</cell>	
				<view class="" @click="signOut">
					<cell iconName="icon-tuichu1" iconColor="#e07d72"   v-if="userId">退出登录</cell>
				</view>
			</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cell from "../../components/cell/cell.vue" 
	export default {
		data() {
			return {
				orderList: [
					{id:1, number: 0, title: "本月结算", unit: "元"},
					{id:0, number: 0, title: "上月预估", unit: "元"},
					{id:2, number: 0, title: "本月付款", unit: "元"},
					{id:3, number: 0, title: "今日订单", unit: "笔"},
				],
				userId: '',
				nickName: "游客",
				message: "每个月25号结算【上月预估】金额，建议26号进行提现",
				avatarUrl: "../../static/img/logo.png"
			}
		},
		onLoad() {
		},
		onShow() {
			this.getUserInfo()
		},
		methods: {
			handleApplication() {
				let token = this.$queue.getStorageData("token")
				if(token) {
					uni.navigateTo({
						url: "/pages/member/publisher"
					})
				} else {
					uni.showModal({
						title:"提示",
						content: "请先完成登陆注册",
						success() {
							if (res.confirm) {
							    this.$queue.clearLogin()
							    uni.navigateTo({
							    	url:"../login/login"
							    })
							}
						}
					})
				}
			},
			getUserInfo() {
				// #ifdef MP-WEIXIN
				this.avatarUrl = this.$queue.getStorageData("avatarUrl")
				this.nickName = this.$queue.getStorageData("nickName")
				let userInfo = this.$queue.getStorageData("userInfo")
				if(!userInfo) {
					uni.navigateTo({
						url: "../public/login"
					})
				}
				// #endif
				
				// #ifndef MP-WEIXIN
				this.userId = this.$queue.getStorageData("userId")
				if(!this.userId) return
				this.$request(`/tao/user/${this.userId}`).then(res => {
					this.nickName = res.data.data.nickName
				})
				// #endif
			},
			login() {
				let token = this.$queue.getStorageData("token")
				// 具有token
				if(token && this.userId) {
					uni.showToast({
						title:"您已经登录，切换账户请先退出",
						icon:"none"
					})
				}
				// 不具有token
				if(!token) {
					this.$queue.setStorageData("href", "/pages/member/user")
				
				// #ifdef MP-WEIXIN
				uni.navigateTo({
					url: '/pages/public/login'
				});
				// #endif
				// #ifndef MP-WEIXIN
				uni.navigateTo({
					url: '/pages/login/login'
				});
				// #endif
				}
			},
			promote() {
				uni.showModal({
				    title: '温馨提示',
				    content: '此功能为会员专享功能,申请成为会员后可使用',
						confirmColor:"#db0011"
				});
			},
			handleOrderItem(index) {
				if(index === 0) {
					uni.showModal({
						showCancel: false,
						title: '上月预估收入说明',
						confirmColor:"#db0011",
						content: '上月个人【确认收货】和团队【确认收货】订单的佣金收入本月25号结算',
					});
				}
				if(index === 1) {
					uni.showModal({
						showCancel: false,
						confirmColor:"#db0011",
						title: '本月预估收入说明',
						content: '本月用户【已付款】+【确认收货】订单的佣金收入，下月25号结算',
					});
				}
				if(index === 2) {
					uni.showModal({
						showCancel: false,
						confirmColor:"#db0011",
						title: '团队收益说明',
						content: '本月团队【确认收货】和【已付款】订单的佣金收入！下月25号结算',
					});
				}
				if(index === 3) {
					uni.showModal({
						showCancel: false,
						confirmColor:"#db0011",
						title: '今日订单说明',
						content: '今日用户【已付款】的订单笔数',
					});
				}
			},
			signOut() {
				uni.showModal({
				    title: '温馨提示',
				    content: '是否退出当前账户',
						confirmColor:"#db0011",
				    success: res => {
				        if (res.confirm) {
				            this.$queue.clearLogin()
				            uni.reLaunch({
				            	url:"/pages/member/user"
				            })
				        } else if (res.cancel) {
				            // console.log('用户点击取消');
				        }
				    }
				});
			}
		},
		components:{ 
			cell
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: rgb(245,245,245);
	}
	.color-bg {
		width: 100%;
		height: 440rpx;
		background-image: linear-gradient(90deg ,$color-sec1,$color-main);
		position: relative;
		.vip-application {
			position: absolute;
			z-index: 9;
			top: 280rpx;
			bottom: 0;
			left: 30rpx;
			right: 30rpx;
			border-radius: 20rpx;
			background-image: linear-gradient(90deg ,rgba(0,0,0,.7),rgba(0,0,0,.8));
		}
		.arc {
			position: absolute;
			height: 40rpx;
			bottom: 0rpx;
			left: 0;
			right: 0;
			z-index: 99;
		}
	}
	.vip-application {
		display: flex;
		justify-content: space-between;
		padding: 30rpx;
		color: #f7d680;
		.vip-left {
			height: 60rpx;
			line-height: 60rpx;
			.iconfont {
				padding-right: 6rpx;
				position: relative;
				top: 4rpx;
			}
		}
		.vip-right {
			height: 60rpx;
			line-height: 60rpx;
			padding: 0 25rpx;
			border-radius: 30rpx;
			color: #333;
			background-color: #fff;
			background: -webkit-linear-gradient(left, #f9e6af, #ffd465);
		}
	}
	.arc {
		image {
			width: 100%;
			height: 40rpx;
		}
	}
	.login {
		position: absolute;
		left: 30rpx;
		top: 30%;
		display: flex;
		align-items: center;
		image {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
		}
		.username {
			padding: 0 30rpx;
			line-height: 120rpx;
			color: #fff;
			font-size: 32rpx;
		}
	}
	.content {
		margin: 0 30rpx;
		.order {
			background-color: #fff;
			border-radius: 20rpx;
		}
	}
	.order-detail {
		display: flex;
		justify-content: space-evenly;
		.order-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			.order-number {
				font-size: 34rpx;
			}
			.order-desc {
				font-size: 26rpx;
				color: #999;
				padding: 10rpx 0 30rpx 0;
			}
		}
	}
	.message {
		font-size: 24rpx;
		text-align: center;
		color: #999;
		line-height: 80rpx;
		.iconfont {
			position: relative;
			top: 3rpx;
			left: 8rpx;
		}
	}
	.menu {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 30rpx 0;
		border-radius: 20rpx;
	}
</style>
