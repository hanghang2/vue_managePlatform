//全局组件
import Vue from 'vue'
import footerMain from '../common/zyhCommon/footer';
import slideShow from '../common/zyhCommon/slideshow';
import zyhZtree from '../common/zyhCommon/zyhZtree';
import zyhTable from '../common/zyhCommon/zyhTable';
import zyhSelect from '../common/zyhCommon/zyhSelect';
import zyhCalendar from '../common/zyhCommon/zyhCalendar';
import zyhInputDate from '../common/zyhCommon/zyhInputDate';
import zyhInputDateScope from '../common/zyhCommon/zyhInputDateScope';
import zyhInputDateScopeChild from '../common/zyhCommon/zyhInputDateScopeChild';
import zyhColorController from '../common/zyhCommon/zyhColorController';
import zyhNavMenu from '../common/zyhCommon/zyhNavMenu';
import zyhTabs from '../common/zyhCommon/zyhTabs';
import zyhDropDown from '../common/zyhCommon/zyhDropDown';
import zyhShuttle from '../common/zyhCommon/zyhShuttle';
import zyhPage from '../common/zyhCommon/zyhPage';
import zyhTootip from '../common/zyhCommon/zyhTootip';
import zyhViewpager from '../common/zyhCommon/zyhViewpager';

export default {
	'allComonet':function () {
		//这个不需要
		Vue.component('footerMain', footerMain);
		//轮播图
		Vue.component('slideShow', slideShow);
		//ztree
		Vue.component('zyhZtree', zyhZtree);
		//表格
		Vue.component('zyhTable', zyhTable);
		//下拉框
		Vue.component('zyhSelect', zyhSelect);
		//日历
		Vue.component('zyhCalendar', zyhCalendar);
		//input 日期选择
		Vue.component('zyhInputDate', zyhInputDate);
		//input 日期范围选择
		Vue.component('zyhInputDateScope', zyhInputDateScope);
		/*input 日期范围选择依赖项*/
		Vue.component('zyhInputDateScopeChild', zyhInputDateScopeChild);
		/*color选择器 */
		Vue.component('zyhColorController', zyhColorController);
		/*横向导航栏 */
		Vue.component('zyhNavMenu', zyhNavMenu);
		/*tbas切换 */
		Vue.component('zyhTabs', zyhTabs);
		/*下拉菜单 */
		Vue.component('zyhDropDown', zyhDropDown);
		/*左右穿梭 */
		Vue.component('zyhShuttle', zyhShuttle);
		/*分页 */
		Vue.component('zyhPage', zyhPage);
		/*tootip提示 */
		Vue.component('zyhTootip', zyhTootip);
        /*走马灯 */
//      Vue.component('zyhViewpager', zyhViewpager);

	},
	component:function(name){
        /*走马灯 */
       function zyhViewpagerFun(){
        	Vue.component('zyhViewpager', zyhViewpager);
			
		}
		return eval(name + 'Fun');
	}
};
Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
