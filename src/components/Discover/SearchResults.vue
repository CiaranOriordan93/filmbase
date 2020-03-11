<template>
  <div class="results">
    <div class="results__container">
      <Result v-for="(movie, key) in buildList" :key="key" :movie="movie"></Result>
    </div>
  </div>
</template>

<script>
import Result from '../../components/Discover/Result'
export default {
  props: ['results'],
  components: {
    Result
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      if (this.counter >= 2) {
        this.counter = 2
      } else this.counter++
    },
    decreaseCounter() {
      if (this.counter <= 0) {
        this.counter = 0
      } else this.counter--
    }
  },
  computed: {
    buildList() {
      if (this.counter === 0) {
        return this.results.slice(0, 20)
      } else if (this.counter === 1) {
        return this.results.slice(20, 40)
      } else if (this.counter === 2) {
        return this.results.slice(40, 60)
      }
      return this.results
    }
  }
}
</script>

<style></style>
