<template>
  <div>
    <NavBar />
    <HeroLanding />
    <Browse />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/Home/NavBar.vue'
import HeroLanding from '@/components/Home/HeroLanding.vue'
import Browse from '@/components/Home/Browse.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
  components: {
    NavBar,
    HeroLanding,
    Browse,
    Footer
  }
}
</script>

<style>

</style>
