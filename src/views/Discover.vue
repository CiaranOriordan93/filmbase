<template>
  <div class="discover">
    <div class="discover__nav">
      <NavBar />
    </div>
    <Search @searchObject="search = $event" @searchCall="searchRequest" />
    <SearchResults :results="result" />
  </div>
</template>

<script>
import NavBar from '../components/Home/NavBar.vue'
import Search from '../components/Discover/Search'
import SearchResults from '../components/Discover/SearchResults'
import APIService from '../services/APIService.js'

export default {
  components: {
    NavBar,
    Search,
    SearchResults
  },
  data() {
    return {
      result: [],
      search: {
        release: 0,
        genre: '',
        sort: ''
      }
    }
  },
  created() {
    APIService.getDiscoverMovies(
      this.search.release,
      this.search.genre,
      this.search.sort
    )
      .then(response => {
        for (let n = 1; n < response.data.results.length; n++) {
          this.result.push(response.data.results[n])
        }
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`)
      })
  },
  methods: {
    searchRequest() {
      APIService.getDiscoverMovies(
        this.search.release,
        this.search.genre,
        this.search.sort
      )
        .then(response => {
          this.result = []
          for (let i = 0; i < response.data.results.length; i++) {
            this.result.push(response.data.results[i])
          }
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`)
        })
    }
  }
}
</script>

<style></style>


