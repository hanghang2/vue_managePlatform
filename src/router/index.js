import Vue from 'vue'
import Router from 'vue-router'
//无访问权限的页面
import login from '@/page/login'
//登录后能访问页面
import main from '@/page/main'
import pageList from './page'
Vue.use(Router)

export default new Router({
    mode:'hash',
    //history模式，可以前进和后退，但是不能刷新页面，刷新之后就会报错。
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'main',
            //路由重定向
            redirect: '/Index6',
            component: main,
            children: pageList
    },{
        path: '/login',
        name:'login',
        component: login,
    }]
})
