<template>
    <div class="mainHead">
        <!--{/*右侧顶部内容*/}-->
        <div class="MainView-top">
            <div class="MainView-top-item margin20">
                <span class="MainView-top-item-showMenu">←</span>
            </div>
            <div class="MainView-top-item">
                <input type="text" placeholder="搜素..."/>
            </div>
            <div class="MainView-top-item right">
                <span class="MainView-top-item-message">消息</span>
            </div>
        </div>
        <!--{/*右侧导航栏内容*/}-->
        <div class="MainView-nav" ref="mainViewNav">
            <div class="MainView-nav-list">
                <li v-for="(item,index) in navList" :key="item.name" v-bind:class='{active:item.active}' @click="active(item)">
                    <span>{{item.title}}</span>
                    <img src='../assets/close.png' alt="" @click.stop="close(item,index)" v-show="navList.length > 1">
                </li>
            </div>
            <div class='menu-tool'>
                <span>↓</span>
                <ul>
                    <li>关闭当前标签页</li>
                    <li>关闭其它标签页</li>
                    <li>关闭全部标签页</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import VM from '@/main'
    export default {
        name: 'mainHead',
        data() {
            return {
                navList:[]//头部导航组件
            }
        },
        methods: {
            addMenu(data){//添加导航
                let isNav = false;//是已存在的导航
                this.navList.map((item,index)=>{
                    item.active = false;//其它不选中
                    if(item.name == data.name){//如果已存在
                        item.active = true;
                        isNav = true;
                    }
                    return item;
                })
                if(!isNav){//如果不存在
                    data.active = true;
                    this.navList.push(data);
                }
                this.$nextTick(()=>{//head nav已更新 计算滚动位置
                    let mainViewNav = this.$refs.mainViewNav;//滚动标签
                    let activeLi = mainViewNav.getElementsByClassName('active')[0],//选中的标签
                        scrollRigth = mainViewNav.scrollWidth - mainViewNav.offsetWidth;//滚动条的距离(最大滚动距离)

                    //距离父标签得距离(应该滚动的距离)
                    let distance = activeLi.offsetLeft;
                    //应该滚动的距离小于最大滚动距离时候 滚动为应该滚动 否则为最大滚动距离
                    this.$refs.mainViewNav.scrollLeft = distance < scrollRigth ? distance : scrollRigth;
                })
            },
            active(item){//选中该导航
                if(this.$route.name == item.name) return;//不是当前选中的路由
                this.addMenu(item)//肯定已存在， 只需要更新选中
                this.$router.push({name:item.name})
            },
            close(itemData,index){//关闭导航
                //缓存清楚
                for(let item in VM.$zyhCache){
                    if(VM.$zyhCache[item].child.$options.nameEn == itemData.name){
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
                if(itemData.active){//关闭的是当前选中的
                    this.navList.splice(index, 1);
                    this.active(this.navList[0])
                }else{
                    this.navList.splice(index, 1);
                }
            }
        },
        created(){
            //初始化
            this.addMenu({name:this.$route.name,title:this.$route.meta.title});
        }
    }
</script>
<!--已经导入scss，之后可以使用scss-->
<style scoped lang="scss">
    .mainHead {
        .MainView-top{
            height: 50px;box-sizing: border-box;font-size: 0;
            .MainView-top-item{
                display: inline-block;font-size: 15px;position: relative;vertical-align: middle;
                &:before{
                    content: '';display: block;width: 0;height: 2px;background: #000000;
                    position: absolute;top: 0;transition: width 0.2s;
                    left: calc(50%);transform: translateX(-50%);
                }
                &:hover{
                    &:before{
                        width: 100%;
                    }
                }
                &.right{float: right;}
                &.margin20{margin: 0 20px;}
                input{
                    height: 50px;padding: 0;margin: 0;box-sizing: border-box;border: none;
                    padding-left: 8px;width: 180px;
                }
                .MainView-top-item-message{
                    cursor: pointer;display: inline-block;height: 50px;line-height: 50px;padding: 0 20px;
                }
                .MainView-top-item-showMenu{
                    cursor: pointer;display: inline-block;height: 50px;line-height: 50px;
                    font-size: 20px;
                }
            }
        }
        .MainView-nav{
            width: calc(100vw - 221px);overflow-x: auto;transition: 0.3s all ease-in;
            border-top: 1px solid #f4f4f4;box-shadow: 1px 1px 2px 0 rgba(0,0,0,.1);
            position: relative;padding-right: 40px;box-sizing: border-box;
            &.hideMenu{width: calc(100vw - 1px);}
            .menu-tool{
                width: 40px;height: 40px;position: fixed;right: 0;top: 51px;text-align: center;line-height: 40px;
                border-left: 1px solid #f4f4f4;font-size: 20px;box-sizing: border-box;background: #ffffff;cursor: pointer;
                &:hover{
                    background: #f4f4f4;
                    ul{
                        display: block;
                    }
                }
                &:active{
                    ul{
                        display: none;
                    }
                }
                ul{
                    width: 140px;background: #ffffff;margin: 0;padding: 0;position: relative;display: none;
                    right: 100px;border: 1px solid #e9e9e9;text-align: center;box-shadow: -2px 2px 2px 0 rgba(136, 133, 133, 0.1);
                    li{
                        list-style: none;font-size: 13px;
                        &:hover{background: #f4f4f4;}
                    }
                }
            }
            .MainView-nav-list{
                font-size: 0;height: 40px;
                position: relative;white-space: nowrap;
                li{
                    list-style: none;font-size: 15px;display: inline-block;height: 40px;line-height: 38px;
                    padding: 0 20px;border-right: 1px solid #f4f4f4;position: relative;cursor: pointer;
                    &:last-of-type{margin-right: 39px;}
                    img{
                        height: 10px;vertical-align: middle;margin-left: 20px;cursor: pointer;
                        vertical-align: middle;padding: 5px;border-radius: 50%;
                        &:hover{
                            background: #f9d7d1;
                        }
                    }
                    &:before{
                        content: '';display: block;width: 0;height: 2px;background: #000000;
                        position: absolute;top: 0;left: 0;
                    }
                    &:hover{
                        &:before{width: 100%;transition: width 0.2s;}
                    }
                    &.active{
                        background-color: #f6f6f6;
                        &:before{
                            width: 100%;height: 2px;
                        }
                    }
                    span{vertical-align: middle;}
                }
            }
        }
    }
</style>
