<template>
  <div class="discover">
    <div class="discover__nav">
      <NavBar></NavBar>
    </div>
    <Search @searchObject="search = $event"></Search>
    <SearchResults :results="result"></SearchResults>
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
      search: {}
    }
  },
  // methods: {
  //   searchRequest() {
  //     APIService.getDiscoverMovies(
  //       this.search.keyword,
  //       this.search.option,
  //       this.search.genre
  //     ).then(response => {
  //       this.result = []
  //       this.result = response.data.results
  //     })
  //   }
  // },
  created() {
    for (let i = 1; i < 10; i++) {
      APIService.getMostPopular(i)
        .then(response => {
          for (let n = 0; n < response.data.results.length; n++) {
            this.result.push(response.data.results[n])
          }
          console.log(this.result)
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`)
        })
    }
  }
}
</script>

<style></style>
