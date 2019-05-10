<template>
  <div id="app">
    <NavBar />
    <HeroLanding />
    <browse />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroLanding from "@/components/HeroLanding.vue";
import Browse from "@/components/Browse.vue";

export default {
  components: {
    NavBar,
    HeroLanding,
    Browse
  }
};
</script>

<style lang="scss">
@import "../src/sass/main.scss";
</style>
