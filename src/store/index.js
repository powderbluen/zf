import Vue from 'vue'
import Vuex from 'vuex'
// vuex-persist插件
import VuePersistence from 'vuex-persist'
const vuexLocal = new VuePersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.token = payload
    }
  },
  actions: {
  },
  modules: {

  },
  plugins: [vuexLocal.plugin]
})
