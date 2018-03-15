<template>
    <div class="orange">
        <h1>{{msg}}</h1>

        <!--页面跳转动画-->
        <div style="position: relative">
            <transition name="fade">
                <router-view style="position: absolute;width: 100%;align-content: center;margin-top: 50px"></router-view>
            </transition>
        </div>

        <!--子路由位置-->
        <router-link to="/orange/green">绿色苹果</router-link>
        <router-link to="/orange/yellow">黄色橙子</router-link>
    </div>
</template>
<script type="text/javascript">
    export default {
        data:function () {
            return {               msg:'我是橙子'
            }
        }
    }
    
</script>
<style>
    .orange{
        color: pink;
    }
    .fade-enter-active, .fade-leave-active {
        animation: bounceIn 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        animation: bounceOut 1s;
    }
</style>