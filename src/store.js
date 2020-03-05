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
    },
    userLogOut(state) {
      state.requestId = null
      state.sessionId = null
      state.userId = null
      state.userName = null
      state.userAvatarHash = null
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
    },
    logOutUser({ commit, state }) {
      APIService.logOut(state.sessionId)
        .then(response => {
          if (response.status === 200) {
            commit('userLogOut')
          } else
            console.log(
              'could not log out because of error: ' + response.status
            )
        })
        .catch(error => console.log(error))
    }
  },
  getters: {}
})
