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
        <select class="search__options" id="sorting" v-model="search.sorting">
          <option v-for="(option, key) in sortOptions" :key="key">
            {{ option }}
          </option>
        </select>
      </label>

      <label for="genre">
        <select class="search__genre" id="genre" v-model="search.genre">
          <option v-for="(genre, name, k) in genres" :key="k" value="Genre">
            {{ genre.name }}
          </option>
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
        sorting: 'Sorting Options',
        genre: 'Genre'
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
      genres: [
        { name: 'Horror', id: '27' },
        { name: 'Comedy', id: '35' },
        { name: 'Action', id: '28' },
        { name: 'Crime', id: '80' },
        { name: 'Drama', id: '18' }
      ]
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
