<template>
  <div class="info">
    <NavBar />
    <Banner
      :show="show"
      :crew="crew"
    />
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
      show: {},
      crew: {
        director: {},
        producer: {},
        writer: {}
      }
    }
  },
  created() {
    if (this.$store.state.movieId === null) {
      APIService.getTvShowDetails(this.$store.state.showId).then(response => {
        this.show = response.data
        APIService.getTvShowCredits(this.$store.state.showId).then(response => {
          console.log(response.data)
          this.crew.director = response.data.cast.find(
            o => o.job === 'Director'
          )
          this.crew.producer = response.data.cast.find(
            o => o.job === 'Producer'
          )
          this.crew.writer = response.data.cast.find(o => o.job === 'Writer')
        })
        this.$store.dispatch('resetTvMovieState')
      })
    } else
      APIService.getMovieDetails(this.$store.state.movieId).then(response => {
        this.show = response.data
        APIService.getMovieCredits(this.$store.state.movieId).then(response => {
          this.crew.director = response.data.crew.find(
            o => o.job === 'Director'
          )
          this.crew.producer = response.data.crew.find(
            o => o.job === 'Producer'
          )
          this.crew.writer = response.data.crew.find(o => o.job === 'Writer')
        })
        this.$store.dispatch('resetTvMovieState')
      })
  }
}
</script>

<style>
</style>