<template>
  <div class="search">
    <div class="search__heading">
      <h2 class="search__heading-text">Discover</h2>
    </div>

    <form class="search__form">
      <span class="search__text">Enter a year e.g : 1998</span>
      <input
        v-model.number.lazy.trim="search.release"
        type="text"
        class="search__input"
      />
      <label for="sorting">
        <select class="search__options" id="sorting" v-model="search.sort">
          <option
            v-for="(option, name, index) in sortOptions"
            :key="index"
            :value="option"
            >{{ name }}</option
          >
        </select>
      </label>

      <label for="genre">
        <select class="search__genre" id="genre" v-model="search.genre">
          <option
            v-for="(genre, name, index) in genres"
            :key="index"
            :value="genre"
            >{{ name }}</option
          >
        </select>
      </label>
    </form>
    <div class="search__submit">
      <input
        type="submit"
        value="Search"
        class="search__submit-search"
        @click.prevent="submitted"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: {
        release: 0,
        sort: '',
        genre: ''
      },
      sortOptions: {
        Filter: '',
        popularityDescending: 'popularity.desc',
        popularityAscending: 'popularity.asc',
        releaseDateDescending: 'release_date.desc',
        releaseDateAscending: 'release_date.asc',
        voteAverageDescending: 'vote_average.desc',
        voteAverageAscending: 'vote_average.asc'
      },
      genres: {
        Genre: '',
        Horror: '27',
        Action: '28',
        Comedy: '35',
        Crime: '80',
        Drama: '18'
      }
    }
  },
  methods: {
    submitted() {
      this.$emit('searchObject', this.search)
      this.$emit('searchCall')
    }
  }
}
</script>

<style></style>
