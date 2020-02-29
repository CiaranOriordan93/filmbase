<template>
  <div class="header">
    <div class="header__content" :class=" { active: filter.toggleMovie }" @click="filterMovies">
      <div class="header__img__container">
        <img src="../../assets/bookmark.svg" height="25px" class="header__img" />
      </div>
      <div class="header__fav__text">
        <p>Your Movies</p>
      </div>
    </div>
    <div class="header__content" :class=" { active: filter.toggleTvShow }" @click="filterTvShows">
      <div class="header__img__container">
        <img src="../../assets/bookmark.svg" height="25px" class="header__img" />
      </div>
      <div class="header__fav__text">
        <p>Your TV Shows</p>
      </div>
    </div>
    <div
      class="header__content"
      :class=" { active: filter.toggleRatedMovie }"
      @click="filterRatedMovies"
    >
      <div class="header__img__container">
        <img src="../../assets/star.svg" height="25px" class="header__img" />
      </div>
      <div class="header__rated__text">
        <p>Rated Movies</p>
      </div>
    </div>
    <div
      class="header__content"
      :class=" { active: filter.toggleRatedTvShow }"
      @click="filterRatedTvShow"
    >
      <div class="header__img__container">
        <img src="../../assets/star.svg" height="25px" class="header__img" />
      </div>
      <div class="header__rated__text">
        <p>Rated TV Shows</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        toggleMovie: false,
        toggleTvShow: false,
        toggleRatedMovie: false,
        toggleRatedTvShow: false
      }
    }
  },
  methods: {
    filterMovies() {
      this.stateReset(this.filter.toggleMovie)
      this.filter.toggleMovie = !this.filter.toggleMovie
      this.submitFilter()
    },
    filterTvShows() {
      this.stateReset(this.filter.toggleTvShow)
      this.filter.toggleTvShow = !this.filter.toggleTvShow
      this.submitFilter()
    },
    filterRatedMovies() {
      this.stateReset(this.filter.toggleRatedMovie)
      this.filter.toggleRatedMovie = !this.filter.toggleRatedMovie
      this.submitFilter()
    },
    filterRatedTvShow() {
      this.stateReset(this.filter.toggleRatedTvShow)
      this.filter.toggleRatedTvShow = !this.filter.toggleRatedTvShow
      this.submitFilter()
    },
    stateReset(clickedEl) {
      if (clickedEl === this.filter.toggleMovie) {
        this.filter.toggleTvShow = false
        this.filter.toggleRatedMovie = false
        this.filter.toggleRatedTvShow = false
      } else if (clickedEl === this.filter.toggleTvShow) {
        this.filter.toggleMovie = false
        this.filter.toggleRatedMovie = false
        this.filter.toggleRatedTvShow = false
      } else if (clickedEl === this.filter.toggleRatedMovie) {
        this.filter.toggleMovie = false
        this.filter.toggleTvShow = false
        this.filter.toggleRatedTvShow = false
      } else {
        this.filter.toggleTvShow = false
        this.filter.toggleMovie = false
        this.filter.toggleRatedMovie = false
      }
    },
    submitFilter() {
      this.$emit('toggle', this.filter)
    }
  }
}
</script>

<style></style>
