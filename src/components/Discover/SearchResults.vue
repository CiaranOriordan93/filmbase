<template>
  <div class="results">
    <div class="results__container">
      <Result v-for="(movie, key) in clean" :key="key" :movie="movie" />
    </div>
  </div>
</template>

<script>
import Result from '../../components/Discover/Result'
export default {
  components: {
    Result
  },
  props: ['results'],
  computed: {
    clean: function() {
      return this.results
        ? this.results.filter(o => o.poster_path !== null)
        : []
    }
  }
}
</script>

<style></style>
