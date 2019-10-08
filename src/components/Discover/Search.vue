<template>
  <div class="search">
    <div class="search__heading">
      <h2 class="search__heading-text">Discover</h2>
    </div>

    <form class="search__form">
      <label for="search">
        <input
          type="text"
          placeholder="Search"
          name="movie"
          id="search"
          class="search__input"
          v-model.lazy="search.keyword"
        />
      </label>
      <label for="sorting">
        <select class="search__options" id="sorting">
          <option v-for="(option, key) in sortOptions" :key="key">{{
            option
          }}</option>
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
        keyword: '',
        genre: 'Horror'
      },
      sortOptions: [
        'Sorting Options',
        'Popularity Descending',
        'Popularity Ascending',
        'Release Date Descending',
        'Release Date Ascending',
        'Vote Average Descending',
        'Vote Average Ascending'
      ],
      genres: {
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
    }
  }
}
</script>

<style></style>
