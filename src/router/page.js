//登录后能访问页面
import index1 from '@/page/content/index1'
import index2 from '@/page/content/index2'
import index3 from '@/page/content/index3'
import index4 from '@/page/content/index4'
import index5 from '@/page/content/index5'
import index6 from '@/page/content/index6'
import index21 from '@/page/content/index21'
import index22 from '@/page/content/index22'
import index23 from '@/page/content/index23'
import index24 from '@/page/content/index24'
import index25 from '@/page/content/index25'
import index26 from '@/page/content/index26'
import index27 from '@/page/content/index27'

export default [{
    path: 'Index1',
    //			path: '*',
    name: 'Index1',
    component: index1,
    meta:{
        title:'轮播图'
    }
}, {
    path: 'Index2',
    name: 'Index2',
    meta: {
        requireAuth: false, // 配置此条，进入页面前判断是否需要登陆
        title:'导航栏'
    },
    component: index2
}, {
    path: 'Index3',
    name: 'Index3',
    meta:{
        title:'树zTree'
    },
    component: index3
}, {
    path: 'Index4',
    name: 'Index4',
    meta:{
        title:'表格'
    },
    component: index4
}, {
    path: 'Index5',
    name: 'Index5',
    meta:{
        title:'下拉框和日历'
    },
    component: index5
}, {
    path: 'Index6',
    name: 'Index6',
    meta:{
        title:'日期选择和颜色选择器'
    },
    component: index6
}, {
    path: 'Index21',
    name: 'Index21',
    meta:{
        title:'tabs标签页'
    },
    component: index21
}, {
    path: 'Index22',
    name: 'Index22',
    meta:{
        title:'下拉菜单'
    },
    component: index22
}, {
    path: 'Index23',
    name: 'Index23',
    meta:{
        title:'穿梭框'
    },
    component: index23
}, {
    path: 'Index24',
    name: 'Index24',
    meta:{
        title:'tootip文字提醒'
    },
    component: index24
}, {
    path: 'Index25',
    name: 'Index25',
    meta:{
        title:'分页'
    },
    component: index25
}, {
    path: 'Index26',
    name: 'Index26',
    meta:{
        title:'走马灯'
    },
    component: index26
}, {
    path: 'Index27',
    name: 'Index27',
    meta:{
        title:'按钮'
    },
    component: index27
}]
