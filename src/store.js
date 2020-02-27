import Vue from 'vue'
import Vuex from 'vuex'
import APIService from './services/APIService.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    requestId: null,
    sessionId: null,
    userId: null,
    userName: null
  },
  mutations: {
    userRequestId(state, userData) {
      state.requestId = userData.token
    },
    userSessionRequest(state, userData) {
      state.sessionId = userData.token
      console.log(state.sessionId)
    }
  },
  actions: {
    getRequestId({ commit }) {
      APIService.getRequestToken()
        .then(response => {
          commit('userRequestId', {
            token: response.data.request_token
          })
        })
        .catch(error => console.log(error))
    },
    getSessionId({ commit, state }) {
      APIService.getSessionId(state.requestId)
        .then(response => {
          console.log(response)
          commit('userSessionRequest', {
            token: response.data.session_id
          })
        })
        .catch(error => console.log(error))
    }
  },
  getters: {}
})
