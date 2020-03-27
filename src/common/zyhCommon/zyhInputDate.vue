<template>
	<div class="zyhInputDate" ref="zyhInputDate">
		<input type="text" v-model="datestr" readonly="readonly" class="dateTime" @click="showCalendar" placeholder="请选择日期"/>
		<i class="zyh-icon-date"><img src="../../../build/zyhIcon/zyhInputDate.png"/></i>
		<zyh-calendar v-show="calendar" @getDate="getdate"></zyh-calendar>
	</div>
</template>
<script>
	
	export default {
		props: [],
		name: 'zyhInputDate',
		data() {
			return {
				datestr:'',
				calendar:false
			}
		},
		methods: {
			getdate(val){
				this.datestr = val;
				this.calendar = false;
				this.$emit('getInputDate',this.datestr);
			},
			showCalendar(){
				this.calendar = true;
			}
		},
		mounted() {
			//点击空白处消失
			let _this = this;
			document.addEventListener('click',function(e){
				try{
					if(!!_this.$refs.zyhInputDate.contains(e.target)) return;
					_this.calendar = false;
				}catch(e){
				}
			})
		},
		created: function() {
			
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.zyhInputDate{
		position: relative;
		display: inline-block;
		width: auto;
	}
	.dateTime{
		outline: none;
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
	    padding: 0 30px;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	    width: 100%;
	}
	.zyh-icon-date{
		pointer-events: none;
	    width: 25px;
	    line-height: 40px;
	    position: absolute;
	    left: 10px;
	    top: 0px;
	}
	.zyh-icon-date img{
		vertical-align: sub;
	}
	.zyh-calendar{
		position: absolute;
		left: 0px;
		top: 45px;
		z-index: 10;
	}
	
</style>