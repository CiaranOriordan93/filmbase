<template>
    <div class="search">
        <div class="search__heading">
            <h2 class="search__heading-text">Discover</h2>
        </div>
        
        <form class="search__form">
            <input type="text" placeholder="Search" name="movie" class="search__input">

            <select class="search__options">
            <option>Popularity Descending</option>
            <option>Popularity Ascending</option>
            <option>Release Date Descending</option>
            <option>Release Date Ascending</option>
            <option>Vote Average Descending</option>
            <option>Vote Average Ascending</option>
            </select>

            <select class="search__genre">
            <option disabled selected>Genre</option>
            <option>Horror</option>
            <option>Comedy</option>
            <option>Action</option>
            <option>Crime</option>
            <option>Drama</option>
            </select>
        </form>
        <div class="search__submit">
            <input type="submit" value="Search" class="search__submit-search">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>