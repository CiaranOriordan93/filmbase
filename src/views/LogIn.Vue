<template>
  <div class="login">
    <div class="login__header">
      <div class="login__logo">
        <img src="../assets/logo-img.png" alt="logo" height="110px" />
      </div>
      <div class="login__heading">
        <h2 class="login__heading__head">Login</h2>
        <p class="login__heading__para">FilmBase</p>
      </div>
    </div>
    <div class="login__main">
      <p
        v-if="continueBtnDisplay"
        class="login__main__warning"
      >Please allow read and write permissions on TMDB</p>
      <p v-if="continueBtnDisplay" class="login__main__warning">Then click continue</p>
      <div class="login__container">
        <button v-if="!continueBtnDisplay" @click="getToken" class="login__btn">Login</button>
        <button v-if="!continueBtnDisplay" class="login__btn">Browse as Guest</button>
        <button v-if="continueBtnDisplay" @click="getSessionId" class="login__btn">Continue</button>
        <p class="login__para">Guest users have access to limited features</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      continueBtnDisplay: false
    }
  },
  computed: {
    ...mapState(['requestId', 'sessionId'])
  },
  watch: {
    requestId: function() {
      this.redirect()
    },
    sessionId: function() {
      this.$router.push('/profile')
    }
  },
  methods: {
    getToken() {
      this.$store.dispatch('getRequestId')
      this.continueBtnDisplay = !this.continueBtnDisplay
    },
    getSessionId() {
      this.$store.dispatch('getSessionId')
    },
    redirect() {
      window.open(`https://www.themoviedb.org/authenticate/${this.requestId}`)
    }
  }
}
</script>

<style></style>

