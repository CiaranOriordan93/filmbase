<template>
  <header
    class="hero"
    :style="{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${playing[0].backdrop_path})` }"
  >
    <div class="hero__text">
      <h3 class="hero__category">Now Playing</h3>
      <h2 class="hero__name">{{ details.title }}</h2>
      <h4 class="hero__details">
        {{ details.genres[0].name }} |
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 510 510"
          style="enable-background:new 0 0 510 510;"
          xml:space="preserve"
          class="hero__icon"
        >
          <g>
            <g>
              <g id="star">
                <polygon
                  points="255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472     139.103,318.011 97.41,497.25   "
                  data-original="#000000"
                  class="active-path"
                  data-old_color="#ffffff"
                  fill="#ffffff"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
        {{ details.vote_average }}
      </h4>
    </div>
  </header>
</template>

<script>
import APIService from '@/services/APIService.js'
export default {
  data() {
    return {
      playing: null,
      details: null
    }
  },
  created() {
    APIService.getPlaying()
      .then(response => {
        this.playing = response.data.results.slice(0, 3)
        APIService.getDetails(this.playing[0].id).then(response => {
          this.details = response.data
        })
      })
      .catch(error => {
        console.log(`There was an error: ${error.response}`) // Logs out the error
      })
  }
}
</script>
