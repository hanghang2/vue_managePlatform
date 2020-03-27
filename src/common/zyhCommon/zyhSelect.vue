<template>
	<div class="zyh-selsect" @click="changes" ref="selsect">
		<input v-model="value" type="text" readonly="readonly" autocomplete="off" placeholder="请选择" class="zyh-selsect-input" v-bind:class="{isfocus:isFocus}">
		<div class="lis" v-show="isFocus">
			<li v-for="(data,index) in selectData" v-bind:class="{activeLi:activeIndex == index}" value="data.value" @click="valueXZ(data.name,data.value)" @mouseover="showActive(index)" v-text="data.name"></li>
		</div>
	</div>
</template>

<script>
	export default {
		props:[
			"selectData","val"
		],
		name: 'zyhSelect',
		data() {
			return {
				isFocus:false,
//				value:'',
				activeIndex:null
			}
		},
		methods: {
			changes(){
				this.isFocus = !this.isFocus;
			},
			valueXZ(name,value){
				this.$emit('getVal',value);
				this.value = name;
			},
			showActive(index){
				this.activeIndex = index;
			}
		},
		mounted(){
			let _this = this;
			document.addEventListener('click',function(e){
				try{
					if(!!_this.$refs.selsect.contains(e.target)) return;
					_this.isFocus = false;
				}catch(e){
				}
			})
		},
		created:function () {
			this.value = '';
			for (var i = 0; i < this.selectData.length; i++) {
				if(this.selectData[i].value === this.val){
					this.value = this.selectData[i].name;
					break;
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.zyh-selsect{
		position: relative;
		width: auto;
		display: inline-block;
	}
	.zyh-selsect-input{
		width: 240px;
		cursor: pointer;
		-webkit-appearance: none;
	    background-color: #fff;
	    background-image: none;
	    border-radius: 4px;
	    border: 1px solid #dcdfe6;
	    box-sizing: border-box;
	    color: #606266;
	    display: inline-block;
	    font-size: inherit;
	    height: 40px;
	    line-height: 40px;
	    outline: none;
	    padding: 0 15px;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	}
	.zyh-selsect-input:hover{
		border-color:#c0c4cc;
	}
	.isfocus{
		border-color: #409eff !important;
	}
	.lis{
		position: absolute;
		background-color: white;
		color: #606266;
		list-style: none;
	    padding: 6px 0;
	    margin: 0;
	    box-sizing: border-box;
	    border: 1px solid #e4e7ed;
		min-width: 240px;
		border: 1px solid #ccc;
		top: 45px;
		left: 0px;
		border-radius: 5px;
		box-shadow: 2px 2px 10px 1px #eaeaea;
	}
	.lis li{
		font-size: 14px;
	    padding: 0 20px;
	    position: relative;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    color: #606266;
	    height: 34px;
	    line-height: 34px;
	    box-sizing: border-box;
	    cursor: pointer;
	    text-align: left;
    }
    .lis li:hover{
    	background-color: #f5f7fa;
    }
	.lis .activeLi{
		background-color: #f5f7fa;
	}
</style>