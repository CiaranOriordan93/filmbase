<template>
<div class="discover">
  <div class="discover__nav">
    <NavBar></NavBar>
  </div>
    <Search></Search>
    <SearchResults></SearchResults>
</div>
</template>

<script>
import NavBar from '../components/Home/NavBar.vue'
import Search from '../components/Discover/Search'
import SearchResults from '../components/Discover/SearchResults'

export default {
  components: {
    NavBar,
    Search,
    SearchResults
  }
}
</script>

<style></style>
