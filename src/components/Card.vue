<template>
  <a href="#" class="card__link">
    <div class="card">
      <div class="card__image-container">
        <img
          :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
          alt="movie poster"
          class="card__image"
        />
        <span class="card__rating">
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
            class="card__icon"
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
                  />
                </g>
              </g>
            </g>
          </svg>
          {{ movie.vote_average }}
        </span>
      </div>
      <h4 class="card__name">{{ stringReducer }}</h4>
      <span class="card__genre">{{ genreFinder }}</span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    },
    genres: {
      type: Array,
      required: true
    }
  },
  computed: {
    genreFinder() {
      let list = this.movie.genre_ids[0]
      let obj = this.genres.find(function(o) {
        return o.id === list
      })
      return obj ? obj.name : ''
    },
    stringReducer: function() {
      const length = 18
      let trimmedString =
        this.movie.title.length > length
          ? this.movie.title.substring(0, length - 3) + '...'
          : this.movie.title
      return trimmedString
    }
  }
}
</script>

<style>
</style>