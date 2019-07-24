<template>
  <main class="main">
    <div class="browse">
      <div class="browse__heading">
        <a href="#" class="browse__category">MOVIES</a>
        <a href="#" class="browse__category">TV SHOWS</a>
      </div>
    </div>
    <CardList>
      <template v-slot:movie-name-1>{{ upComing[0] ? upComing[0].title : "" }}</template>
      <template v-slot:movie-rating-1>{{ upComing[0] ? upComing[0].vote_average : "" }}</template>
      <template v-slot:movie-genre-1>{{ genre }}</template>
    </CardList>
    <CardList></CardList>
    <CardList></CardList>
    <CardList></CardList>
  </main>
</template>

<script>
import CardList from '@/components/CardList.vue'
import APIService from '@/services/APIService.js'
export default {
  components: {
    CardList
  },
  data() {
    return {
      upComing: [],
      popular: [],
      topRated: [],
      playingNow: [],
      details: [],
      genres: []
    }
  },

  computed: {
    genre: function() {
      let list = this.upComing[0] ? this.upComing[0].genre_ids[0] : 0
      let obj = this.genres.find(function(o) {
        return o.id === list
      })
      return obj ? obj.name : ''
    }
  },

  created() {
    let self = this
    APIService.getUpcoming()
      .then(response => {
        self.upComing = response.data.results
        console.log(this.upComing)
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`)
      }),
      APIService.getGenres()
        .then(response => {
          self.genres = response.data.genres
          //console.log(this.genres)
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`)
        })
  }
}
</script>
