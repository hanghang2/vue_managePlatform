<template>
	<div class="zyhInputDateScope" ref="zyhInputDate">
		<input type="text" v-model="datestr" readonly="readonly" class="dateTime" @click="showCalendar" placeholder="请选择日期"/>
		<i class="zyh-icon-date"><img src="../../../build/zyhIcon/zyhInputDate.png"/></i>
		<zyh-input-date-scope-child ref="datescope1" @yearMonth="yearMonth1" class="zyhCalenadr1" :data1="date1" :left="scopeChid.left" :right="scopeChid.right" v-show="calendar" @getDate="getdate"></zyh-input-date-scope-child>
		<zyh-input-date-scope-child ref="datescope2" @yearMonth="yearMonth2" class="zyhCalenadr2" :data2="date2" :left="scopeChid.left2" :right="scopeChid.right2" v-show="calendar" @getDate="getdate2"></zyh-input-date-scope-child>
		
	</div>
</template>
<script>
	
	export default {
		props: [],
		name: 'zyhInputDateScope',
		data() {
			return {
				datestr:'',
				date1:'',
				date2:'',
				calendar:false,
				scopeChid:{
					left:true,
					right:false,
					left2:false,
					right2:true
				}
			}
		},
		methods: {
			getdate(val){
				this.date1 = val;
				this.$emit('getInputDate',this.datestr);
			},
			getdate2(val){
				this.date2 = val;
				this.$emit('getInputDate',this.datestr);
			},
			showCalendar(){
				this.calendar = true;
			},
			yearMonth1(val){
				if(val[1] == 12){
					val[0]++;
					val[1] = 1;
				}else{
					val[1]++;
				}
				this.$refs.datescope2.init(val[0],val[1])
			},
			yearMonth2(val){
				if(val[1] == 1){
					val[0]--;
					val[1] = 12;
				}else{
					val[1]--;
				}
				this.$refs.datescope1.init(val[0],val[1]);
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
		computed: {
		  	address() {
			    const { date1, date2 } = this
			    return {
			    	date1,
			    	date2
			    }
		  	}
		},
		watch: {
			address: {
			    handler: function(val) {
			    	if(val.date1 && val.date2){
			    		this.datestr = val.date1 + '至' + val.date2;
						this.calendar = false;
			    	}
			    },
			    deep: true
			}
		},
		created: function() {
			
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.zyhInputDateScope{
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
	.zyhInputDateScope .zyhCalenadr1{
		position: absolute;
		left: 0px;
		top: 45px;
		border-right: 0px;
		border-bottom-right-radius: 0px;
		border-top-right-radius: 0px;
		box-shadow:6px 2px 6px 0 rgba(183, 180, 180, 0.1);
	}
	.zyhInputDateScope .zyhCalenadr2{
		position: absolute;
		left: 324px;
		top: 45px;
		border-left: 0px;
		border-bottom-left-radius: 0px;
		border-top-left-radius: 0px;
		box-shadow:6px 2px 6px 0 rgba(183, 180, 180, 0.1);
	}
</style>