import Vue from 'vue'

import app from './App.vue'

import ElementUI from 'vue-cli-plugin-element-master';
//import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//mint-ui 按需引入
import {
    Header,
    Swipe,
    SwipeItem
} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//引入mui样式、扩展图标样式、扩展图标所需字体文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

//导入安装路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入自己的 router.js 路由模块
import router from './router.js'

const vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //路由对象挂载到 vue 实例上
});