<template>
  <div class="history">
    <div class="history__fav-movies">
      <div class="history__heading">
        <h2 class="history__heading__h2">Favorite Movies</h2>
      </div>
      <Result />
    </div>
    <div class="history__fav-tv">
      <div class="history__heading">
        <h2 class="history__heading__h2">Favorite TV Shows</h2>
      </div>
      <Result />
    </div>
    <div class="history__rated-movies">
      <div class="history__heading">
        <h2 class="history__heading__h2">Rated Movies</h2>
      </div>
      <Result />
    </div>
    <div class="history__rated-tv">
      <div class="history__heading">
        <h2 class="history__heading__h2">Rated TV Shows</h2>
      </div>
      <Result />
    </div>
  </div>
</template>

<script>
import Result from '../Discover/Result'
export default {
  components: {
    Result
  }
}
</script>

<style></style>
