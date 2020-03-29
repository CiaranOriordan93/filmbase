<template>
  <div class="info">
    <NavBar />
    <Banner :show="show" :crew="crew" :favourited="favourited" :rating="rating" />
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
      },
      rating: null,
      favourited: false
    }
  },
  created() {
    if (this.url === 'infoTv') {
      APIService.getTvShowDetails(this.$route.params.id).then(response => {
        this.show = response.data
      })
      APIService.getUserFavTvShows(
        this.$store.state.userId,
        this.$store.state.sessionId
      )
        .then(response => {
          if (response.data.results.find(o => o.id == this.$route.params.id)) {
            this.favourited = true
          } else {
            this.favourited = false
          }
        })
        .catch(error => console.log(error))

      APIService.getUserRatedTvShows(
        this.$store.state.userId,
        this.$store.state.sessionId
      )
        .then(response => {
          if (response.data.results.find(o => o.id == this.$route.params.id)) {
            let show = response.data.results.find(
              o => o.id == this.$route.params.id
            )
            this.rating = show.rating
          } else {
            this.rating = null
          }
        })
        .catch(error => console.log(error))
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