import Vue from 'vue'
import App from './App.vue'
// 作为程序的主入口，必须首先引入组件，loading 下面的index.js 是用来控制和处理loading.vue 本身的，它们是层层依赖的关系，默认是会去找
//components/loading 下面的index.js 的，所有此处的index.js也可以省略，如果不是index.js的话，就必须显示的引入
import loadingComponent from "./components/loading/index.js"
// import loadingComponent from "./components/loading/"  如果是这种写法也是可以的
// import loadingComponent from "./components/loading/a.js"  如果默认不是index.js 就必须写上

Vue.use(loadingComponent)
new Vue({
  el: '#app',
  render: h => h(App)
})
