//1、导入vue
import Vue from 'vue';

//2.0 导入vue-router
import VueRouter from 'vue-router'

//2.0.1 将vueRouter绑定到 Vue对象上来
Vue.use(VueRouter);

//2.0.2 导入路由规则定义的模板
import login from '../components/account/login.vue';
import register from '../components/account/register.vue';

//2.1 导入App.vue的vue对象
import App from './App.vue';


//2.2 定义路由规则
const router = new VueRouter({
    routes: [
        {path: '/login', component: login},
        {path: '/register', component: register}
    ]
});

//3、利用Vue对象进行解析渲染
new Vue({
    el: '#app',
    //使用路由对象实例
    router,
    render: c => c(App) //es6写法goes to
});