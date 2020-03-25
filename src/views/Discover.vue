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
        release: '',
        genre: '',
        sort: ''
      }
    }
  },
  created() {
    APIService.getDiscoverMovies(
      this.search.release,
      this.search.sort,
      this.search.genre
    )
      .then(response => {
        this.result = response.data.results.filter(o => o !== null)
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`)
      })
  },
  methods: {
    searchRequest() {
      APIService.getDiscoverMovies(
        this.search.release,
        this.search.sort,
        this.search.genre
      )
        .then(response => {
          this.result = response.data.results.filter(o => o !== null)
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`)
        })
    }
  }
}
</script>

<style></style>


