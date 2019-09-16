<template>
  <main class="main">
    <div class="browse">
      <div class="browse__heading">
        <a href="#" class="browse__category">MOVIES</a>
        <a href="#" class="browse__category">TV SHOWS</a>
      </div>
    </div>

    <CardList
      v-for="(result, key) in results"
      :key="key"
      :movie="result"
      :heading="key"
    ></CardList>
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
      results: {
        upComing: [],
        popular: [],
        topRated: [],
        playingNow: []
      }
    }
  },
  created() {
    APIService.getUpcoming()
      .then(response => {
        this.results.upComing = response.data.results.slice(0, 18)
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`)
      }),
      APIService.getPopular()
        .then(response => {
          this.results.popular = response.data.results.slice(0, 18)
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`)
        }),
      APIService.getTopRated()
        .then(response => {
          this.results.topRated = response.data.results.slice(0, 18)
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`)
        }),
      APIService.getPlaying()
        .then(response => {
          this.results.playingNow = response.data.results.slice(0, 18)
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`)
        })
  }
}
</script>
