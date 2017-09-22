import Vue from 'vue'
import App from './App.vue'
import store from './store'
new Vue({
  el: '#app',
  store,//将store 挂在vue 实例身上，暴露在外面
  render: h => h(App)
})
