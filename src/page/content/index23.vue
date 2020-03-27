<template>
	<div class="Index23">
		<zyh-shuttle :zyhShuttle="datalist"></zyh-shuttle>
		<div style="display: inline-block;width: 200px;text-align: center;">
			<button class="zbtn zyh-blue" @click="right()">到右边></button>
			<button class="zbtn zyh-blue" @click="left()">到左边<</button>
		</div>
		<zyh-shuttle :zyhShuttle="datalist2"></zyh-shuttle>
	</div>
</template>

<script>
	export default {
		name: 'Index23',
		data() {
			return {
				datalist:[
					{
						name:"首选项1",
						checked:false,
						checkid:0
					},{
						name:"首选项2",
						checked:false,
						checkid:1
					},{
						name:"首选项3",
						checked:false,
						checkid:2
					},{
						name:"首选项4",
						checked:false,
						checkid:3
					},{
						name:"首选项5",
						checked:false,
						checkid:4
					}
				],
				datalist2:[
					{
						name:"首选项1",
						checked:false,
						checkid:5
					},{
						name:"首选项2",
						checked:false,
						checkid:6
					},{
						name:"首选项3",
						checked:false,
						checkid:7
					},{
						name:"首选项4",
						checked:false,
						checkid:8
					},{
						name:"首选项5",
						checked:false,
						checkid:9
					}
				]
			}
		},
		methods: {
			right(){
				for (var i = 0; i < this.datalist.length; ) {
					if(this.datalist[i].checked){
						this.datalist[i].checked = false;
						this.datalist2.push(this.datalist[i]);
						this.datalist.splice(i,1);
					}else{
						i++;
					}
				}
			},
			left(){
				for (var i = 0; i < this.datalist2.length; ) {
					if(this.datalist2[i].checked){
						this.datalist2[i].checked = false;
						this.datalist.push(this.datalist2[i]);
						this.datalist2.splice(i,1);
					}else{
						i++;
					}
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
