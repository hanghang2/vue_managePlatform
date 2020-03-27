<template>
	<div class="zyhZtree">
		<li>
		    <div
		      :class="{bold: isFolder}"
		      @click="toggle">
		      <input v-if="toolbar.ischeck" type="checkbox" v-model="model.checked" @click="noBubble" />
		      <input v-show="edits" v-model="model.name" @blur="noedits" @click="noBubble" />
		      <span v-show="!edits">{{model.name}}</span>
		      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
		    </div>
		    <li v-if="toolbar.isadd" class="add" @click="addChild">新增</li>
		    <li v-if="toolbar.isdelete" class="remove" @click="remove">删除</li>
		    <li v-if="toolbar.edit" class="edit" @click="edit">编辑</li>
		    <div class="clearBoth"></div>
		    <ul v-show="open" v-if="isFolder">
		      <zyh-ztree v-if="model.name"
		        class="item"
		        v-for="model in model.children"
		        :key="model.id"
		        :model="model"
		        :toolbar="toolbar"
		        @parentMethod="macSelect"
		         >
		      </zyh-ztree>
		    </ul>
		</li>
	</div>
</template>
<script>
	/*******************************/
	import Vue from 'vue'
	export default {
		props: [
			'model','toolbar'
		],
		name:'zyhZtree',
		data() {
			return {
				//编辑使用的
				edits:false,
				//父组件传递的
				data:null,
				open: false,
				idStr:0
			}
		},
		computed: {
			isFolder() {
				return this.model.children && this.model.children.length;
			}
		},
		methods: {
			//父组件执行
			macSelect(param){
				this.model.children.remove(param.childmodel); 
			},
			//展开关闭
			toggle() {
				if(this.isFolder) {
					this.open = !this.open
				}
			},
			//新增
			addChild() {
				if(this.model.children){}else{
					Vue.set(this.model, 'children', [])
					this.open = true
				}
				this.model.children.push({
					name: '新节点',
					checked:false,
					id:this.idStr++
				})
				
			},
			//编辑
			edit(){
				this.edits = true;
				
			},
			noedits(){
				this.edits = false;
			},
			noBubble(event){
				event.cancelBubble = true;
			},
			//删除
			remove(){
//				if(this.model.children){
//					if(this.model.children.length){
//						alert('请先删除子节点');
//						return;
//					}
//				}
				this.$emit('parentMethod',{'childmodel':this.model});
			}
		}
	}
</script>

<style scoped>
	.zyhZtree{
		padding-left: 20px;
	}
	.item {
	  cursor: pointer;
	}
	.bold {
	  font-weight: bold;
	}
	ul {
	  padding-left: 1em;
	  line-height: 1.5em;
	  list-style-type: dot;
	}
	.add,.remove,.edit{
		color: blue;
		cursor: pointer;
		margin-left: 20px;
		list-style: none;
	}
	.remove{
		color: red;
	}
	.edit{
		color: green;
	}
	li{
		float: left;
		width: auto;
	}
	.clearBoth{
		clear: both;
	}
</style>