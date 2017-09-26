
import loadingComponent from "./loading.vue"
const loading={
    // 必须有一个install 方法，这样在使用的时候才可以use,use 的时候默认是会调install 方法 的，同时还需要传一个Vue 构造函数，用于创建组件
    install:function (Vue){
        // loading 为组件名，用于对外暴露使用的，而loadingComponent 是组件的具体实现（内容）
        Vue.component("loading",loadingComponent)
        
    }

}
// 最后把写好的组件导出去
export default loading;

//注意：这里有三层依赖关系，首先是main.js 里面需要倒入loading 中的index.js ,因为main.js 是程序入口，所有的依赖必须的有，
// 然后，index.js 是用来控制和配置loading.vue 组件的，所有必须引入loading.vue 组件本身才可以，最终在到处去，最终的最终。loadig.vue ,经过
//一系列的转化导出到了main.js 