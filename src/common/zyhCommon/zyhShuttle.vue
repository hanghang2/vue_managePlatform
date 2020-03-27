<template>
	<div class="zyh-shuttle">
		<p class="shuttle-title" @click="allChecked()">
			<i class="shuttle-check" v-bind:class="{'is-checked': allchecked,'ishavecheck':ishavecheck}"></i>
			<span class="shuttle-title-text">列表1</span>
			<span class="shuttle-title-num">{{num}}/{{datalist.length}}</span>
		</p>
		<div class="shuttle-main">
			<li v-for="(item,index) in datalist" :key="item.checkid"  @click="ischeck(index)"><i class="shuttle-check" v-bind:class="{'is-checked': item.checked}"></i><span v-text="item.name"></span></li>
		</div>
	</div>
</template>

<script>
	export default {
		props:["zyhShuttle"],
		name: 'zyhShuttle',
		data() {
			return {
				ishavecheck:false,
				allchecked:false,
				num:0,
				datalist:[]
//				datalist:[
//					{
//						name:"首选项1",
//						checked:false,
//						checkid:0
//					},{
//						name:"首选项2",
//						checked:false,
//						checkid:1
//					},{
//						name:"首选项3",
//						checked:false,
//						checkid:2
//					},{
//						name:"首选项4",
//						checked:false,
//						checkid:3
//					},{
//						name:"首选项5",
//						checked:false,
//						checkid:4
//					}
//				]
			}
		},
		methods: {
			//选中条数获取
			getNum(num){
				this.num = num;
			},
			//选择框
			ischeck(ischeck){
				if(ischeck != 'no'){
					this.datalist[ischeck].checked = !this.datalist[ischeck].checked;
				}
				if(this.datalist.length == 0){
					this.allchecked = false;
					this.ishavecheck = false;
					this.getNum(0);
					return;
				}
				//判断选中了多少位全选改变状态
				var all=true,no=false,num=0;
				for (var i = 0; i < this.datalist.length; i++) {
					all = all && this.datalist[i].checked;
					no = no || this.datalist[i].checked;
					if(this.datalist[i].checked) num++;
				}
				if(all){
					this.allchecked = true;
					this.ishavecheck = false;
				}else if(no){
					this.allchecked = false;
					this.ishavecheck = true;
				}else{
					this.allchecked = false;
					this.ishavecheck = false;
				}
				this.getNum(num);
			},
			//全选
			allChecked(){
				this.allchecked = !this.allchecked;
				var num=0;
				for (var i = 0; i < this.datalist.length; i++) {
					this.datalist[i].checked = this.allchecked;
					if(this.datalist[i].checked) num++;
				}
				this.ishavecheck = false;
				this.getNum(num);
			}
		},
		watch:{
			datalist(curVal,oldVal){
				this.ischeck('no')
			}
		},
		mounted(){},
		created:function () {
			this.datalist = this.zyhShuttle;
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*check选择框*/
	.shuttle-check{
		width: 14px;
		height: 14px;
		display: inline-block;
		box-sizing: border-box;
		border: 1px solid #dcdfe6;
		border-radius: 2px;
		background: #fff;
		cursor: pointer;
		vertical-align: middle;
		position: relative;
		margin-right: 8px;
	}
	.shuttle-check:hover{
		border-color: #409eff;
	}
	/*选中*/
	.is-checked{
		background: #409eff;
		border-color: #409eff;
	}
	.is-checked:after{
		transform: rotate(45deg) scaleY(1);
		height: 6px;
	    width: 3px;
	    left: 4px;
	    box-sizing: content-box;
	    content: "";
	    border: 1px solid #fff;
	    border-left: 0;
	    border-top: 0;
	    height: 7px;
	    left: 4px;
	    position: absolute;
	    top: 1px;
	    width: 3px;
	    transition: transform .15s ease-in .05s;
	    transform-origin: center;
	}
	/*半选中*/
	.ishavecheck{
		background: #409eff;
		border-color: #409eff;
	}
	.ishavecheck:after{
		content: "";
		height: 1px;
	    width: 6px;
	    left: 4px;
	    display: block;
	    background: #fff;
	    margin-left: 3px;
	    margin-top: 5px;
	}
	
	
	.zyh-shuttle{
		font-size: 14px;
		color: #666;
		border: 1px solid #ebeef5;
	    border-radius: 4px;
	    overflow: hidden;
	    background: #fff;
	    display: inline-block;
	    vertical-align: middle;
	    width: 200px;
	    max-height: 100%;
	    box-sizing: border-box;
	    height: 288px;
	}
	.shuttle-title{
		cursor: pointer;
		font-size: 16px;
		height: 40px;
	    line-height: 40px;
	    background: #f5f7fa;
	    margin: 0;
	    padding-left: 15px;
	    border-bottom: 1px solid #ebeef5;
	    box-sizing: border-box;
	    color: #000;
	}
	.shuttle-title-text{
		vertical-align: middle;
	}
	.shuttle-title-num{
		font-size: 12px;
		color: #888;
		float: right;
		margin-right: 15px;
	}
	.shuttle-main{
		height: 246px;
		width: 100%;
		overflow-y: auto;
	}
	.shuttle-main li{
		cursor: pointer;
		list-style: none;
		height: 30px;
	    line-height: 30px;
	    padding-left: 15px;
	    display: block;
	}
	.shuttle-main li span{
		vertical-align: middle;
	}
	.shuttle-main li:hover{
		color: #409EFF;
	}
</style>