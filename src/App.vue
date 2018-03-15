<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-link to="/orange">橙子</router-link>
    <router-link :to="{path:url}">苹果</router-link>
    <router-link to="/">返回首页</router-link>
    <button @click="jsTo">js跳转</button>
    <!--<hello></hello>-->
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data(){
    return {
      url:'/apple'
    }
  },
  methods:{
    jsTo(){
      this.$router.push({path:'/orange'})
    }
  },
  components: {
    //Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
