<template>
  <div class="profile">
    <NavBar />
    <main class="profile__container">
      <SideBar />
      <div class="profile__content">
        <Header @toggle="filter = $event" />
        <History :filter="filter" />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/Home/NavBar.vue'
import SideBar from '../components/Profile/SideBar.vue'
import Header from '../components/Profile/Header.vue'
import History from '../components/Profile/History.vue'
export default {
  components: {
    NavBar,
    SideBar,
    Header,
    History
  },
  data() {
    return {
      filter: {
        toggleMovie: false,
        toggleTvShow: false,
        toggleRatedMovie: false,
        toggleRatedTvShow: false
      }
    }
  },
  created() {
    if (!this.$store.state.sessionId) {
      this.$router.push('/login')
    }
    this.$store.dispatch('getUserDetails')
  }
}
</script>

<style></style>
