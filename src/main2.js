import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './Home.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);

// The routing configuration
const RouterConfig = {
    routes: [
        {path: '/login', name:'/login',component: () => import('../components/account/login.vue')},
        {path: '/register',name:'/register', component: () => import('../components/account/register.vue')}
    ]
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
