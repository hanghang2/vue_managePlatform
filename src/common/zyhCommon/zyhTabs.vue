<template>
	<div class="zyh-tabs" v-bind:class="zyhtabs.type">
		<li v-for="(item,index) in zyhtabs.list" v-bind:class="{'active-tbas': index==activeLi}" @click="tabsClick(index,item)">
			<span v-html="item"></span>
			<span v-if="zyhtabs.close" class="close" @click.stop="close(index)">×</span>
		</li>
	</div>
</template>

<script>
    import VM from '../../main'
	export default {
		props:["zyhtabs"],
		name: 'zyhTabs',
		data() {
			return {
				activeLi:0,
                nameObj: {
                    Index6: '日期选择和颜色选择器',
                    Index1: '轮播图',
                    Index2: '导航栏',
                    Index3: '树zTree',
                    Index4: '表格',
                    Index5: '下拉框和日历',
                    Index21: 'tabs标签页',
                    Index22: '下拉菜单',
                    Index23: '穿梭框',
                    Index25: '分页',
                    Index24: 'tootip文字提醒',
                    Index26: '走马灯',
                    Index27: '按钮'
                },
			}
		},
		methods: {
			tabsClick(index,txt){
				this.activeLi = index;
				this.$emit('tabsActive',{'index':index,'txt':txt});
			},
			close(index){
			    if(this.zyhtabs.list.length == 1){
			        return;
                }
			    let name;
			    for(let item in this.nameObj){ //去查找当前关闭的页面name
                    if(this.nameObj[item] == this.zyhtabs.list[index]){
                        name = item;
                        break;
                    };
                }
                for (let item in VM.$zyhCache) {//去查找当前缓存页面中的name和关闭的name相同的页面
                    if(VM.$zyhCache[item].child.$options.name == name){
                        if (VM.$zyhKeys.length) {
                            let index = VM.$zyhKeys.indexOf(item);
                            if (index > -1) {
                                VM.$zyhKeys.splice(index, 1);//删除keys缓存
                            }
                        }
                        delete VM.$zyhCache[item];//删除页面缓存
                        break;
                    }
                }
			    // console.log(this.zyhtabs.list)
                // console.log(this.zyhtabs)
				this.zyhtabs.list.splice(index,1);
				if(this.activeLi > index || this.activeLi == index ){
					this.activeLi = index - 1;
					if(this.activeLi == -1){
						if(this.zyhtabs.list.length > 0){
							this.activeLi = 0;
							this.$emit('tabsActive',{'index':this.activeLi,'txt':this.zyhtabs.list[this.activeLi],'clearNextKeepAlive':true});
						}else{
							return;
						}
					}
					this.$emit('tabsActive',{'index':this.activeLi,'txt':this.zyhtabs.list[this.activeLi],'clearNextKeepAlive':true});
				}
			},
			selected(name){
				this.activeLi = this.zyhtabs.list.indexOf(name);
			}
		},
		mounted(){},
		created:function () {
			this.$emit('tabsActive',{'index':0,'txt':this.zyhtabs.list[0]});
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.zyh-tabs{
		font-size: 0px;
		width: 100%;
	}
	.zyh-tabs li{
		cursor: pointer;
		list-style: none;
		display: inline-block;
		font-size: 14px;
		color: #333;
	}
	.zyh-tabs li:hover{
		color: #409eff;
	}

	/*line*/
	.line{
		box-sizing: border-box;
		height: 40px;
		border-bottom: 2px solid #e4e7ed;
	}
	.line li{
		margin: 0px 20px;
		height: 40px;
		line-height: 40px;
		box-sizing: border-box;
	}
	.line li:nth-of-type(1){
		margin-left: 0px;
	}
	.line li:nth-last-of-type(1){
		margin-right: 0px;
	}
	.line li.active-tbas{
		color: #409eff;
		border-bottom: 2px solid #409eff;
	}
	/*card*/
	.card{
		box-sizing: border-box;
		height: 41px;
		border-bottom: 1px solid #e4e7ed;
	}
	.card li{
		padding: 0px 20px;
		border-bottom: 1px solid #e4e7ed;
		border-top: 1px solid #e4e7ed;
		border-right: 1px solid #e4e7ed;
		height: 41px;
		line-height: 41px;
		box-sizing: border-box;
	}
	.card li:nth-of-type(1){
		border-left: 1px solid #e4e7ed;
		border-top-left-radius: 4px;
	}
	.card li:nth-last-of-type(1){
		border-top-right-radius: 4px;
	}
	.card li.active-tbas{
		color: #409eff;
		border-bottom: 1px solid #ffffff;
	}
	/*border-card*/
	.border-card{
		background: #f5f7fa;
		box-sizing: border-box;
		height: 41px;
		border-bottom: 1px solid #e4e7ed;
		border-top: 1px solid #e4e7ed;
		border-right: 1px solid #e4e7ed;
	}
	.border-card li{
		margin-top: -1px;
		padding: 0px 20px;
		border-bottom: 1px solid #e4e7ed;
		border-top: 1px solid #e4e7ed;
		border-right: 1px solid #e4e7ed;
		height: 41px;
		line-height: 41px;
		box-sizing: border-box;
	}
	.border-card li:nth-of-type(1){
		border-left: 1px solid #e4e7ed;
	}
	.border-card li.active-tbas{
		background: #fff;
		color: #409eff;
		border-bottom: 1px solid #ffffff;
	}
	/*close*/
	.zyh-tabs li .close{
		opacity: 0;
		display: inline-block;
		margin-left: 5px;
		padding: 5px;
		width: 18px;
		height: 18px;
		border-radius: 9px;
		line-height: 9px;
		vertical-align: middle;
	}
	.zyh-tabs li:hover .close{
		opacity: 1;
		transition-duration:0.3s;
	}
	.zyh-tabs li:hover .close:hover{
		background: #ddd;
		color: white;
		transition-duration:0.5s;
	}
	.zyh-tabs li.active-tbas .close{
		opacity: 1;
	}
</style>
