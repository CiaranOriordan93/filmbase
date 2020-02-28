<template>
  <div class="history">
    <div class="history__heading">
      <h2 class="history__heading__h2">Favorite Movies</h2>
    </div>
    <div class="history__fav-movies">
      <Result v-for="(movie, key) in favMovies" :key="key" :movie="movie" />
    </div>
    <div class="history__fav-tv">
      <div class="history__heading">
        <h2 class="history__heading__h2">Favorite TV Shows</h2>
      </div>
    </div>
    <div class="history__rated-movies">
      <div class="history__heading">
        <h2 class="history__heading__h2">Rated Movies</h2>
      </div>
    </div>
    <div class="history__rated-tv">
      <div class="history__heading">
        <h2 class="history__heading__h2">Rated TV Shows</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Result from '../Discover/Result'
import APIService from '../../services/APIService'
export default {
  components: {
    Result
  },
  data() {
    return {
      favMovies: [],
      ratedMovies: [],
      favTvShows: [],
      ratedTvShows: []
    }
  },
  created() {
    APIService.getUserFavMovies(
      this.$store.state.userId,
      this.$store.state.sessionId
    )
      .then(response => {
        this.favMovies = response.data.results
      })
      .catch(error => console.log(error))

    APIService.getUserRatedMovies(
      this.$store.state.userId,
      this.$store.state.sessionId
    )
      .then(response => {
        this.ratedMovies = response.data.results
      })
      .catch(error => console.log(error))

    APIService.getUserFavTvShows(
      this.$store.state.userId,
      this.$store.state.sessionId
    )
      .then(response => {
        this.favTvShows = response.data.results
      })
      .catch(error => console.log(error))

    APIService.getUserRatedTvShows(
      this.$store.state.userId,
      this.$store.state.sessionId
    )
      .then(response => {
        this.ratedTvShows = response.data.results
      })
      .catch(error => console.log(error))
  }
}
</script>

<style></style>
