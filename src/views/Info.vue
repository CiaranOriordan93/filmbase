<template>
  <div class="info">
    <NavBar />
    <Banner :show="show" :crew="crew" />
  </div>
</template>

<script>
import NavBar from '../components/Home/NavBar'
import Banner from '../components/Info/Banner'
import APIService from '../services/APIService'

export default {
  components: {
    NavBar,
    Banner
  },
  data() {
    return {
      url: this.$route.name,
      show: {},
      crew: {
        director: {},
        producer: {},
        writer: {}
      }
    }
  },
  created() {
    if (this.url === 'infoTv') {
      APIService.getTvShowDetails(this.$route.params.id).then(response => {
        this.show = response.data
      })
    } else
      APIService.getMovieDetails(this.$route.params.id).then(response => {
        this.show = response.data
        APIService.getMovieCredits(this.$route.params.id).then(response => {
          this.crew.director = response.data.crew.find(
            o => o.job === 'Director'
          )
          this.crew.producer = response.data.crew.find(
            o => o.job === 'Producer'
          )
          this.crew.writer = response.data.crew.find(o => o.job === 'Writer')
        })
      })
  }
}
</script>

<style>
</style>