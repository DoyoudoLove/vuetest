<template>
    <div>
        <!--html 页面结构-->
        <span v-text="msg" class="red"></span>
        <button @click="add(1,2)">相加</button>
        <button @click="substrict(1,2)">相减</button>

        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>

        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>
    //按需导入
    import {substrict} from "./calc";

    function add(x, y) {
        alert(x + y);
    }

    //负责导出 .vue组件对象
    export default {
        name: "App",
        data() {
            return {
                msg: 'hello vue1111',
            }
        },
        methods: {
            add,
            substrict
        },
        created() {

        }
    }
</script>

<style scoped>
    /*scoped 写的样式只对当前页面有效*/
    .red {
        color: #f32123;
    }
</style>