<template>
  <div class="carousel">
    <div class="heading__container">
      <h3 class="carousel__heading">{{ formatString.toUpperCase() }}</h3>
    </div>
    <div class="carousel__container">
      <div class="carousel__arrow">
        <img
          @click="decreaseCounter"
          src="../../assets/back.svg"
          alt="right arrow"
        />
      </div>

      <card
        v-for="(movie, i) in buildList"
        :key="i"
        :movie="movie"
        :genres="genres"
      ></card>
      <div class="carousel__arrow">
        <img
          @click="increaseCounter"
          src="../../assets/right-arrow.svg"
          alt="right arrow"
        />
      </div>
    </div>
    <div class="carousel__seperator"></div>
  </div>
</template>

<script>
import Card from './Card'
import APIService from '@/services/APIService'

export default {
  components: { Card },
  props: {
    movie: {
      type: Array,
      required: true
    },
    heading: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      genres: [],
      counter: 0
    }
  },
  created() {
    APIService.getGenres()
      .then(response => {
        this.genres = response.data.genres
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`)
      })
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
    formatString() {
      for (let i = 0; i < this.heading.length; i++) {
        if (
          this.heading[i] === this.heading[i].toUpperCase() &&
          this.heading[i] !== this.heading[i].toLowerCase()
        ) {
          return this.heading.substr(0, i) + ' ' + this.heading.substr(i)
        }
      }
      return this.heading
    },
    buildList() {
      if (this.counter === 0) {
        return this.movie.slice(0, 6)
      } else if (this.counter === 1) {
        return this.movie.slice(6, 12)
      } else if (this.counter === 2) {
        return this.movie.slice(12, 18)
      }
    }
  }
}
</script>

<style></style>
