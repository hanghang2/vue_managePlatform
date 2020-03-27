<template>
	<div class="Index5">
		<zyh-select :selectData="selectData" :val="value" @getVal="getval">

		</zyh-select>
		<button @click="getvalue">获取弹框值</button>
		<hr />
		<br />
		<zyh-calendar @getDate="getdate"></zyh-calendar>
	</div>
</template>

<script>
	export default {
		name: 'Index5',
		data() {
			return {
				//日历
				datestr:'',
				//下拉框
				value:33,
				selectData:[
					{
						name:'第一个',
						value:11
					},
					{
						name:'第二个',
						value:22
					},
					{
						name:'第三个',
						value:33
					}
				]
			}
		},
		methods: {
			getvalue(){
				console.log(this.value)
			},
			getval(val){
				this.value = val;
			},
			getdate(val){
				this.datestr = val;
				console.log(this.datestr)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		padding-top: 30px;
		padding-left: 30px;
		height: 3000px;
	}
</style>
