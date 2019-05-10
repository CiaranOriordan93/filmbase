<template>
  <div id="app">
    <NavBar />
    <HeroLanding />
    <Browse />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroLanding from "@/components/HeroLanding.vue";
import Browse from "@/components/Browse.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    HeroLanding,
    Browse,
    Footer
  }
};
</script>

<style lang="scss">
@import "../src/sass/main.scss";
</style>
