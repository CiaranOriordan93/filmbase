import Vue from 'vue'
import Vuex from 'vuex'
import APIService from './services/APIService.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    requestId: null,
    sessionId: null,
    userId: null,
    userName: null,
    userAvatarHash: null
  },
  mutations: {
    userRequestId(state, userData) {
      state.requestId = userData.token
    },
    userSessionRequest(state, userData) {
      state.sessionId = userData.token
    },
    userDetails(state, userData) {
      state.userId = userData.token.id
      state.userName = userData.token.username
      state.userAvatarHash = userData.token.avatar.gravatar.hash
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
          commit('userSessionRequest', {
            token: response.data.session_id
          })
        })
        .catch(error => console.log(error))
    },
    getUserDetails({ commit, state }) {
      APIService.getUserDetails(state.sessionId).then(response => {
        commit('userDetails', {
          token: response.data
        })
      })
    }
  },
  getters: {}
})
