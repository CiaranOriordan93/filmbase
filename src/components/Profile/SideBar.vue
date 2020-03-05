<template>
  <aside class="sidebar">
    <div class="sidebar__content">
      <div class="sidebar__image">
        <img
          class="sidebar__image__img"
          :src="`https://secure.gravatar.com/avatar/${this.$store.state.userAvatarHash}`"
        />
      </div>
      <div class="sidebar__text">
        <h3 class="sidebar__heading">Welcome</h3>
        <p class="sidebar__para">{{ this.$store.state.userName }}</p>
      </div>
      <div class="sidebar__button">
        <button class="sidebar__button__btn" @click="logOut">Log Out Btn</button>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch('logOutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
