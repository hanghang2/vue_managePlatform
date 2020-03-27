<template>
	<div class="zyh-calendar">
		<div class="calendar-head">
			<button v-show="datatype != 2 && left" class="pLeftMonth" @click="prevYear()"> 《 </button>
			<button v-show="datatype === 0 && left" class="pLeftYear" @click="prevMonth()"> < </button>
			<span v-show="datatype != 2" @click="selectyear()">{{year}} 年 </span>
			<span v-show="datatype === 0" @click="selectMonth()"> {{month}} 月</span>
			<button v-show="datatype != 2 && right" class="prightYear" @click="nextYear()"> 》 </button>
			<button v-show="datatype === 0 && right" class="prightMonth" @click="nextMonth()"> > </button>
			<!--年选择-->
			<button v-show="datatype === 2" class="pLeftMonth" @click="prevYearscope()"> 《 </button>
			<span v-show="datatype === 2" >{{yearScope}} </span>
			<button v-show="datatype === 2" class="prightMonth" @click="nextYearscope()"> 》</button>
		</div>
		<div class="calendar-item">
			<table cellspacing="0" cellpadding="0" class="zyh-date-table">
				<tbody v-show="datatype === 0">
					<tr class="bottomBorder">
						<th>日</th>
						<th>一</th>
						<th>二</th>
						<th>三</th>
						<th>四</th>
						<th>五</th>
						<th>六</th>
					</tr>
					<tr v-for="(items,index1) in dayArr2" class="zyh-date-table__row">
						<td v-for="(item,index2) in items" v-bind:class="{'active':theActive(item),'prev-month':item.type=='prevMonth','available':item.type=='available','next-month':item.type=='nextMonth','today':item.day==nowDay}">
							<div @click="activeDay(item,index1,index2)">
								<span v-text="item.day"></span>
							</div>
						</td>
					</tr>
				</tbody>
				<tbody class="zyh-month-table" v-show="datatype === 1">
					<tr>
						<td><div @click="setMonth(1)">一月</div></td>
						<td><div @click="setMonth(2)">二月</div></td>
						<td><div @click="setMonth(3)">三月</div></td>
						<td><div @click="setMonth(4)">四月</div></td>
					</tr>
					<tr>
						<td><div @click="setMonth(5)">五月</div></td>
						<td><div @click="setMonth(6)">六月</div></td>
						<td><div @click="setMonth(7)">七月</div></td>
						<td><div @click="setMonth(8)">八月</div></td>
					</tr>
					<tr>
						<td><div @click="setMonth(9)">九月</div></td>
						<td><div @click="setMonth(10)">十月</div></td>
						<td><div @click="setMonth(11)">十一月</div></td>
						<td><div @click="setMonth(12)">十二月</div></td>
					</tr>
				</tbody>
				<tbody class="zyh-month-table" v-show="datatype === 2">
					<tr>
						<td><div @click="setYear(yearScopeArr[0])">{{yearScopeArr[0]}}</div></td>
						<td><div @click="setYear(yearScopeArr[1])">{{yearScopeArr[1]}}</div></td>
						<td><div @click="setYear(yearScopeArr[2])">{{yearScopeArr[2]}}</div></td>
						<td><div @click="setYear(yearScopeArr[3])">{{yearScopeArr[3]}}</div></td>
					</tr>
					<tr>
						<td><div @click="setYear(yearScopeArr[4])">{{yearScopeArr[4]}}</div></td>
						<td><div @click="setYear(yearScopeArr[5])">{{yearScopeArr[5]}}</div></td>
						<td><div @click="setYear(yearScopeArr[6])">{{yearScopeArr[6]}}</div></td>
						<td><div @click="setYear(yearScopeArr[7])">{{yearScopeArr[7]}}</div></td>
					</tr>
					<tr>
						<td><div @click="setYear(yearScopeArr[8])">{{yearScopeArr[8]}}</div></td>
						<td><div @click="setYear(yearScopeArr[9])">{{yearScopeArr[9]}}</div></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['left','right','date1','date2'],
		name: 'zyhCalendar',
		data() {
			return {
				//选择天 年 月(0,1,2)
				datatype:0,
				/*************年**************/
				
				/*************月**************/
				
				/*************天**************/
				//视图使用
				active:null,
				month:new Date().getMonth() + 1,
				year:new Date().getFullYear(),
				dayArr2:[[],[],[],[],[],[]],
				//方法使用
				nowDay:new Date().getDate(),
				nowMonth:new Date().getMonth() + 1,
				nowYear:new Date().getFullYear(),
				activeDays:'',
				activeMonth:'',
				activeYear:'',
				dayArr:[],
				maxday:null,
				yearScope:'',
				yearScopeArr:[],
				scale:0,
			}
		},
		methods: {
			activeDay(item,i,j){
				if(item.type == 'prevMonth'){
					this.prevMonth();
				}
				if(item.type == 'nextMonth'){
					this.nextMonth();
				}
				this.activeYear = this.year;
				this.activeMonth = this.month;
				this.activeDays = item.day;
				this.active = this.activeYear + '-' + this.activeMonth + '-' + this.activeDays;
				this.$emit('getDate',this.activeYear + '-' + this.activeMonth + '-' + this.activeDays);
			},
			selectMonth(){
				this.datatype = 1;
			},
			setMonth(month){
				this.datatype = 0;
				this.month = month;
				this.init();
			},
			selectyear(){
				this.datatype = 2;
			},
			theActive(item){
				if(this.active == (this.year + '-' + this.month + '-' + item.day)){
					return true;
				}
				return false;
			},
			nextYear(){
				this.year++;
				this.init();
				this.$emit('yearMonth',[this.year,this.month]);
			},
			nextMonth(){
				if(this.month == 12){
					this.year++;
					this.month = 1;
				}else{
					this.month++;
				}
				this.init();
				this.$emit('yearMonth',[this.year,this.month]);
			},
			prevYear(){
				this.year--;
				this.init();
				this.$emit('yearMonth',[this.year,this.month]);
			},
			prevMonth(){
				if(this.month == 1){
					this.year--;
					this.month = 12;
				}else{
					this.month--;
				}
				this.init();
				this.$emit('yearMonth',[this.year,this.month]);
			},
			setYear(year){
				this.year = year;
				this.datatype = 1;
			},
			nextYearscope(){
				this.scale++;
				this.yearScopeInit();
			},
			prevYearscope(){
				this.scale--;
				this.yearScopeInit();
			},
			getDaysInMonth(year,month){
				//parseInt(number,type)这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。
				month = parseInt(month,10);
				var temp = new Date(year,month,0);
				return temp.getDate();
			},
			getweek(year,month,day){
				return new Date(year+'-'+month+'-'+day).getDay();
			},
			init(year,month){
				if(year&&month){
					this.year = year;
					this.month = month;
				}
				//当天日期
				if(this.nowMonth == this.month && this.nowYear == this.year){
					this.nowDay = new Date().getDate();
				}else{
					this.nowDay = null;
				}
				this.dayArr = [];
				this.dayArr2 = [[],[],[],[],[],[]];
				this.maxday = this.getDaysInMonth(this.year,this.month);
				//{type:'prevMonth',day:31},{type:'available',day:1},{type:'nextMonth',day:1}
				var weeks = [0,1,2,3,4,5,6];
				let minWeek = this.getweek(this.year,this.month,1);
				let maxWeek = this.getweek(this.year,this.month,this.maxday);
				let prevday = this.getDaysInMonth(this.year,this.month-1);
				//prev天数
				minWeek = minWeek == 0 ? 6 : minWeek - 1;
				for (var i = 0; i < minWeek+1; i++) {
					this.dayArr.unshift({
						type:'prevMonth',
						day:prevday - i
					})
				}
				//this month天数
				for (var i = 1; i < this.maxday+1; i++) {
					this.dayArr.push({
						type:'available',
						day:i
					})
				}
				//next天数
				maxWeek = 42 - this.dayArr.length;
				for (var i = 1; i < maxWeek+1; i++) {
					this.dayArr.push({
						type:'nextMonth',
						day:i
					})
				}
				for (var i = 0; i < 6; i++) {
					for (var j = 0; j < 7 ;j++) {
						this.dayArr2[i].push(this.dayArr[i*7+j])
					}
				}
			},
			yearScopeInit(){
				this.yearScope = parseInt(this.nowYear/10 + this.scale)*10 + ' 年 - ' + (parseInt(this.nowYear/10+this.scale)*10 + 9) + ' 年';
				for (var i = 0; i < 10; i++) {
					this.yearScopeArr[i] = parseInt(this.nowYear/10+this.scale)*10 + i;
				}
			}
		},
		mounted() {
			
		},
		created: function() {
			if(this.right == true){
				if(this.month == 12){
					this.year++;
					this.month = 1;
				}else{
					this.month++;
				}
			}
			this.yearScopeInit();
			this.init();
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.zyh-calendar {
		width: 324px;
		height: 344px;
		color: #606266;
		border: 1px solid #e4e7ed;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		background: #fff;
		border-radius: 4px;
		line-height: 30px;
	}
	.calendar-head {
		height: 54px;
		padding: 12px;
		text-align: center;
		font-size: 16px;
		box-sizing: border-box;
	}
	.calendar-head button {
		border: none;
		background: none;
		padding: 0px 6px;
		outline: none;
		cursor: pointer;
	}
	.calendar-head span {
		cursor: pointer;
	}
	.calendar-head button:hover,
	.calendar-head span:hover {
		color: #409eff;
	}
	.prightYear,.prightMonth{
		float: right;
	}
	.pLeftMonth,.pLeftYear{
		float: left;
	}
	.calendar-item {
		height: 287px;
		padding: 15px;
		box-sizing: border-box;
	}
	.zyh-date-table{
		width: 100%;
		text-align: center;
		height: 100%;
	}
	.prev-month,.next-month{
		cursor: pointer;
		color: #c0c4cc;
	}
	.available{
		cursor: pointer;
	}
	.today{
		color: #409eff;
		font-weight: bold;
	}
	.available.active span{
		color: #fff;
	    background-color: #409eff;
	    border-radius: 50%;
	    display: block;
	    width: 30px;
	    margin: 0px auto;
	}
	.zyh-date-table__row td>div{
		width: 41px;
	}
	.bottomBorder th{
		border-bottom: 1px solid #ebeef5;
	}
	.zyh-month-table td>div{
		cursor: pointer;
	}
	.zyh-month-table td>div:hover{
		color: #409eff;
	}
</style>