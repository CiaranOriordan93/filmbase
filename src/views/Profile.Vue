<template>
  <div class="profile">
    <NavBar></NavBar>
    <main class="profile__container">
      <SideBar></SideBar>
      <div class="profile__content">
        <Header></Header>
        <History></History>
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
  }
}
</script>

<style></style>
