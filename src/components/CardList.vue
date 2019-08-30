<template>
  <div class="carousel">
    <div class="heading__container">
      <h3 class="carousel__heading">Airing Today</h3>
    </div>
    <div class="carousel__container">
      <div class="carousel__arrow">
        <a href="#">
          <img src="../assets/back.svg" alt="right arrow" />
        </a>
      </div>
      <card v-for="movie in movie" :movie="movie" :genres="genres"></card>
      <div class="carousel__arrow">
        <a href="#">
          <img src="../assets/right-arrow.svg" alt="right arrow" />
        </a>
      </div>
    </div>
    <div class="carousel__seperator"></div>
  </div>
</template>

<script>
import Card from './Card'
import APIService from '../services/APIService'

export default {
  props: {
    movie: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      genres: []
    }
  },
  components: {
    Card
  },
  created() {
    APIService.getGenres()
      .then(response => {
        this.genres = response.data.genres
        console.log(this.genres)
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`)
      })
  }
}
</script>

<style>
</style>
