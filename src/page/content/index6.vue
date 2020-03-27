<template>
	<div class="Index6">
		<br />
		<zyh-input-date @getInputDate="getdate"></zyh-input-date>
		<zyh-input-date @getInputDate="getdate2"></zyh-input-date>
		<br /><br /><br />
		<zyh-input-date-scope @getInputDate="getdate3"></zyh-input-date-scope>
		<br />
		<br />
		<br />
		<div class="colorDiv" v-bind:style="{background:color}" @click="showColor"></div>
		<zyh-color-controller @getColor="getcolor" ref="zyhcolorCont"></zyh-color-controller>
		<br />
		<br />
		<br />
		<button class="zbtn">默认按钮</button>
        <br />
        <br />
        <zyh-calendar @getDate="getdate4"></zyh-calendar>
	</div>
</template>
<script>
	export default {
		name: 'Index6',
		data() {
			return {
				color:'',
				datestr:''
			}
		},
		methods: {
			getdate(val){
				this.datestr = val;
				console.log(this.datestr)
			},
			getdate2(val){
				console.log(val);
			},
			getdate3(val){
				console.log(val);
			},
            getdate4(val){
                console.log(val);
            },
			getcolor(color){
                this.color = color;
                console.log(color);
          	},
           	showColor(){
           		this.$refs.zyhcolorCont.show()
           	}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.index6{
		height: 800px;
		padding-left: 20px;
	}
	.colorDiv{
		width: 20px;
		height: 20px;
		border: 1px solid #000;
	}
</style>
