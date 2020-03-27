<template>
	<div class="zyh-drop-down" @mouseenter="onMouseOver">
		<div class="dropdown_title" @mouseleave="onMouseOut" @click="dropdown"><slot></slot></div>
		<div class="dropdown_hover" v-show="isShow" @mouseleave="onMouseOut"><slot name="dropdown_zyh"></slot></div>
	</div>
</template>

<script>
	export default {
		//接收父组件数据
		props:["zyhType"],
		//组建名称
		name:"zyhDropDown",
		//自运行组建数据
		data(){
			return {
				isShow:false
			};
		},
		//组建方法
		methods:{
			onMouseOver(){
				if(this.zyhType != "click"){
					this.isShow = true;
					clearTimeout(this.timeOut);
				}
			},
			onMouseOut(){
				if(this.zyhType != "click"){
					let _this = this;
					_this.timeOut = setTimeout(function(){
						_this.isShow = false;
					},500)
				}
			},
			dropdown(){
				this.isShow = !this.isShow;
			},
			hide(){
				this.isShow = false;
			}
		},
		//组建dom加载完成后回调
		mounted(){
			
		},
		//组建dom加载之前，数据初始化之后
		created:function(){
			console.log(this.zyhType)
		}
		
	}
</script>

<style scoped>
	.zyh-drop-down{
		
	}
	.dropdown_title{
		display: inline-block;
		cursor: pointer;
    	color: #409eff;
	    font-size: 14px;
	}
	.dropdown_hover{
		position: absolute;
	}
	.dropdown_hover,.dropdown_click{
		width: auto;
		margin: 8px 0px 5px 0px;
		padding: 10px 0px;
		background-color: #fff;
	    border: 1px solid #ebeef5;
	    border-radius: 4px;
	    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	}
	.dropdown_hover:before{
		content: " ";
		width: 10px;
		height: 10px;
		position: absolute;
		top: -5px;
		display: block;
		left: calc(50%);
		background: #ccc;
		transform: rotateZ(45deg);
		background: #fff;
	    border-top: 1px solid #ebeef5;
	    border-left: 1px solid #ebeef5;
	}
	.dropdown_hover li,.dropdown_click li{
		list-style: none;
	    line-height: 36px;
	    padding: 0 20px;
	    margin: 0;
	    font-size: 14px;
	    color: #606266;
	    cursor: pointer;
	    outline: none;
	}
	.dropdown_hover li:hover,.dropdown_click li:hover{
		background-color: #ecf5ff;
    	color: #66b1ff;
	}
</style>