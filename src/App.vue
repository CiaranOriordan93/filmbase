<template>
  <div id="app">
    <NavBar />
    <HeroLanding />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroLanding from "@/components/HeroLanding.vue";

export default {
  components: {
    NavBar,
    HeroLanding
  }
};
</script>

<style lang="scss">
@import "../src/sass/main.scss";
</style>
