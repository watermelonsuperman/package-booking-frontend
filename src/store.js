import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    addMsg (store, form) {
      axios.post('http://localhost:8080/packages', form)
    }
  }
})
