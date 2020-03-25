<template>
  <div class="search">
    <div class="search__heading">
      <h2 class="search__heading-text">Discover</h2>
    </div>

    <form class="search__form" @submit.prevent>
      <span class="search__text">Enter a year e.g : 1998</span>
      <input v-model.number.trim="search.release" type="number" class="search__input" />
      <label for="sorting">
        <select id="sorting" v-model="search.sort" class="search__options">
          <option
            v-for="(option, name, index) in sortOptions"
            :key="index"
            :value="option"
          >{{ name }}</option>
        </select>
      </label>

      <label for="genre">
        <select id="genre" v-model="search.genre" class="search__genre">
          <option v-for="(genre, name, index) in genres" :key="index" :value="genre">{{ name }}</option>
        </select>
      </label>
    </form>
    <div class="search__submit">
      <input type="submit" value="Search" class="search__submit-search" @click="submitted" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: {
        release: '',
        sort: '',
        genre: ''
      },
      sortOptions: {
        Filter: '',
        voteAverageDescending: 'vote_average.desc',
        voteAverageAscending: 'vote_average.asc',
        releaseDateDescending: 'release_date.desc',
        releaseDateAscending: 'release_date.asc',
        popularityDescending: 'popularity.desc',
        popularityAscending: 'popularity.asc'
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
  mounted() {
    window.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        this.submitted()
      }
    })
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
