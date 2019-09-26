<template>
  <div class="result__card">
    <div class="result__image">
      <img
        :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
        class="result__image__img"
      />
    </div>
    <div class="result__heading">
      <p>{{ stringReducer }}</p>
    </div>
    <div class="result__rating">
      <span>
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
                  fill="#eb4e7a"
                />
              </g>
            </g>
          </g>
        </svg>
        {{ movie.vote_average }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie'],
  computed: {
    stringReducer: function() {
      const length = 16
      let trimmedString =
        this.movie.title.length > length
          ? this.movie.title.substring(0, length - 3) + '...'
          : this.movie.title
      return trimmedString
    }
  }
}
</script>

<style></style>
