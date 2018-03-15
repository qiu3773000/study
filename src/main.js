import Vue from 'vue'
import App from './App'

import Hello from './components/Hello'
import Orange from './components/orange'
import Apple from './components/apple'
import yellowOrange from './components/yellowOrange'
import greenApple from './components/greenApple'
//引入vue-router
import Router from 'vue-router'
//添加vue-router
Vue.use(Router)

//3.实例化router 这个构造函数
let router = new Router({
    mode: 'history',//去掉hash ,也就是#
    routes: [
        {
            path: '/',
            component: Hello
        },
        {
            path: '/orange',
            name: 'orange',
            component: Orange,
            //添加子组件
            children: [
                {
                    path: 'yellow',
                    component: yellowOrange
                },
                {
                    path: 'green',
                    component: greenApple
                }
            ]
        },
        {
            path: '/apple',
            component: Apple
        }
    ]
})
Vue.config.productionTip=false
/* eslint-disable no-new */
new Vue({
        el: '#app',
        //4.将vue-router添加到vue中
        router:router,
        template:'<App/>',
        components:{ App }
})
