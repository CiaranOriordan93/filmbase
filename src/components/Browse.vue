<template>
  <main class="main">
    <div class="browse">
      <div class="browse__heading">
        <a href="#" class="browse__category">MOVIES</a>
        <a href="#" class="browse__category">TV SHOWS</a>
      </div>
    </div>
    <CardList></CardList>
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
      upComing: null,
      popular: null,
      topRated: null,
      playingNow: null
    }
  },
  created() {
    APIService.getUpcoming()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`)
      })
  }
}
</script>
