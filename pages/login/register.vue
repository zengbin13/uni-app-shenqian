<template>
	<view class="register">
		<!-- #ifdef H5 -->
		<back></back>
		<!-- #endif -->
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image src="../../static/img/logo.png"></image>
			</view>
			<!-- 主体 -->
			<view class="main">
				<wInput
					v-model="phoneData"
					type="text"
					maxlength="11"
					placeholder="手机号"
				></wInput>
				<wInput
					v-model="passData"
					type="password"
					maxlength="11"
					placeholder="登录密码"
					isShowPass
				></wInput>
				<wInput
					v-model="verCode"
					type="number"
					maxlength="6"
					placeholder="验证码"
					
					isShowCode
					ref="runCode"
					@setCode="getVerCode()"
				></wInput>
					
			</view>
				
			<wButton 
				class="wbutton"
				text="注 册"
				bgColor="#c7000a"
				:rotate="isRotate" 
				@click.native="startReg()"
			></wButton>
			
			<!-- 底部信息 -->
			<view class="footer">
				<text 
					@tap="isShowAgree" 
					class="cuIcon"
					:class="showAgree?'cuIcon-radiobox':'cuIcon-round'"
				> 同意</text>
				<!-- 协议地址 -->
				<navigator url="/pages/member/privacy-agreement" open-type="navigate">《隐私协议》</navigator>和
				<navigator url="/pages/member/user-agreement" open-type="navigate">《用户服务协议》</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	var _this;
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	import back from "./back.vue"
	export default {
		
		data() {
			return {
				phoneData:'18723170206', // 用户/电话
				passData:'', //密码
				verCode:"", //验证码
				showAgree:false, //协议是否选择
				isRotate: false, //是否加载旋转
			}
		},
		components:{
			wInput,
			wButton,
			back
		},
		mounted() {
			_this= this;
		},
		methods: {
			isShowAgree(){
				//是否选择协议
				_this.showAgree = !_this.showAgree;
			},
			getVerCode(){
				//获取验证码
				if (_this.phoneData.length != 11) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
				uni.showLoading({
					title:"获取验证码"
				})
				this.$request("/tao/user/sendMsg/" + this.phoneData + "/register").then(res => {
					uni.hideLoading()
					uni.showToast({
							icon: 'none',
							title: '验证码已发送,请注意查收'
					});
					this.$refs.runCode.$emit('runCode');
				}).catch(err => {
					uni.showToast({
							icon: 'none',
							title: '获取验证码失败'
					});
				})
			},
		    startReg() {
				//注册
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.showAgree == false) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '请同意《用户协议》'
				    });
				    return false;
				}
				if (this.phoneData.length !=11) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号不正确'
				    });
				    return false;
				}
		        if (this.passData.length < 6) {
		            uni.showToast({
		                icon: 'none',
										position: 'bottom',
		                title: '密码不正确'
		            });
		            return false;
		        }
				if (this.verCode.length != 6) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '验证码不正确'
				    });
				    return false;
				}
				this.$request("/tao/user/bindOpenid", {
					pwd: this.passData,
					phone: this.phoneData,
					msg: this.verCode,
					platform: "app",
					invitation: 2231278816,
					openid: this.$queue.getStorageData("openid")
				}, "POST").then(res => {
					let token = res.data.data.uuid
					let userId = res.data.data.userId
					let mobile = this.phoneData
					this.$queue.setStorageData("token", token)
					this.$queue.setStorageData("userId", userId)
					this.$queue.setStorageData("mobile", mobile)
					//getUserInfo
					// this.getUserInfo(userId, token);
				})
				_this.isRotate=true
				setTimeout(function(){
					_this.isRotate=false
				},3000)
		    }
		}
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/main.css");
</style>