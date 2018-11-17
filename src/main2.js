import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './Home.vue';
// import Routers from '../vue-router.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import login from "../components/account/login";
import register from "../components/account/register";

Vue.use(VueRouter);
Vue.use(iView);

// The routing configuration
const RouterConfig = {
    routes: [
        {path: '/login', component: login},
        {path: '/register', component: register}
    ]
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
