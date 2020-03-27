<template>
    <div class="MainView-left">
        <div class='menu'>MENU</div>
        <li v-for="item in menuList" :key="item.name" v-bind:class="{'active':activeName == item.name}" @click="goPage(item.name,item.title)">{{item.title}}</li>
    </div>
</template>
<script>
    import pageList from '@/router/page'
    export default {
        name: 'leftMenu',
        data() {
            let menuList = pageList.map((item)=>{//初始化值
                return {name:item.name,title:item.meta.title}
            })
            return {
                menuList,
                activeName:''
            }
        },
        watch:{
            $route(newValue,oldValue){//路由监听 改变选中项
                this.activeName = newValue.name;
            }
        },
        methods: {
            goPage(name,title){//路由跳转
                if(this.$route.name == name) return;//不是当前选中的路由
                this.$router.push({name})
                this.$emit('menuchange',{name,title});//通知父组件切换导航
            }
        },
        created(){
            this.activeName = this.$route.name;//初始选中项
        }
    }
</script>
<!--已经导入scss，之后可以使用scss-->
<style  scoped lang="scss">
    .MainView-left{
        width: 220px;border-right: 1px solid #f4f4f4;transition: 0.3s all ease-in;position: relative;z-index: 1;
        background-color: #20222A;
        &.hideMenu{
            width: 0;
        }
        .menu{
            text-align: center;padding: 30px 0;font-size: 30px;width: 220px;color: #ffffff;
        }
        li{
            list-style: none;line-height: 40px;cursor: pointer;color: #cccccc;
            box-sizing: border-box;padding-left: 40px;width: 220px;
            &:hover{
                color: #2196F3;
            }
            &.active{
                color: #ffffff;background-color: #2196F3;border-right: 2px solid #ffffff;
            }
        }
    }
</style>
