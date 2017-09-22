 import Vue from 'vue'
 import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from './mutations'
import actions from './actions'
export default new Vuex.Store({
    modules:{
        mutations //  由于mutations 本身导出的是模块，所以就把它放在modules 里面
    },
    actions,
})
