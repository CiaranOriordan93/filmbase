<template>
  <main class="main">
    <div class="browse">
      <div class="browse__heading">
        <a class="browse__category" @click="toggleMovies">MOVIES</a>
        <a class="browse__category" @click="toggleTv">TV SHOWS</a>
      </div>
    </div>
    <div v-if="counter" class="cardList">
      <CardList v-for="(result, key) in movieResults" :key="key" :movie="result" :heading="key"></CardList>
    </div>
    <div v-else class="cardList">
      <CardList v-for="(result, key) in tvResults" :key="key" :movie="result" :heading="key"></CardList>
    </div>
  </main>
</template>

<script>
import CardList from '@/components/Home/CardList.vue'
import APIService from '@/services/APIService.js'
export default {
  components: {
    CardList
  },
  data() {
    return {
      movieResults: {
        upComing: [],
        popular: [],
        topRated: [],
        playingNow: []
      },
      tvResults: {
        upComing: [],
        popular: [],
        topRated: [],
        playingNow: []
      },
      counter: true
    }
  },
  created() {
    //API calls for movies
    APIService.getUpcoming()
      .then(response => {
        this.movieResults.upComing = response.data.results.slice(0, 18)
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`)
      }),
      APIService.getPopular()
        .then(response => {
          this.movieResults.popular = response.data.results.slice(0, 18)
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`)
        }),
      APIService.getTopRated()
        .then(response => {
          this.movieResults.topRated = response.data.results.slice(0, 18)
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`)
        }),
      APIService.getPlaying()
        .then(response => {
          this.movieResults.playingNow = response.data.results.slice(0, 18)
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`)
        })

    //API calls for Tv Shows
    APIService.getPopularTv()
      .then(response => {
        this.tvResults.popular = response.data.results.slice(0, 18)
      })
      .catch(error => {
        console.log(`There was an error: ${error.response} in populartv`)
      })
    APIService.getTopRatedTv()
      .then(response => {
        this.tvResults.topRated = response.data.results.slice(0, 18)
      })
      .catch(error => {
        console.log(`There was an error: ${error.response} in topratedtv`)
      })
    APIService.getLatestTv()
      .then(response => {
        this.tvResults.upComing = response.data.results.slice(0, 18)
      })
      .catch(error => {
        console.log(`There was an error: ${error.response} in latesttv`)
      })
    APIService.getPlayingNowTv()
      .then(response => {
        this.tvResults.playingNow = response.data.results.slice(0, 18)
      })
      .catch(error => {
        console.log(`There was an error: ${error.response} in playingNow`)
      })
  },
  methods: {
    toggleMovies() {
      this.counter = true
    },
    toggleTv() {
      this.counter = false
    }
  }
}
</script>
