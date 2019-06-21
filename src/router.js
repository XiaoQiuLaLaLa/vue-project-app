import VueRouter from 'vue-router'

//导入路由组件
import HomeContent from './components/tabbar/HomeContent.vue'
import MemberContent from './components/tabbar/MemberContent.vue'
import SearchContent from './components/tabbar/SearchContent.vue'
import ShopcarContent from './components/tabbar/ShopcarContent.vue'

//创建路由对象
var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContent},
        {path:'/member',component:MemberContent},
        {path:'/search',component:SearchContent},
        {path:'/shopcar',component:ShopcarContent}
    ],
    linkActiveClass:'mui-active'
});

export default router   //把路由对象暴露出去