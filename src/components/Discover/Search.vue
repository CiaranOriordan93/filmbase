<template>
    <div class="discover__container">
        <div class="discover__heading">
            <h2>Discover</h2>
        </div>
        <hr>
        
        <form class="discover__form">
            <input type="text" placeholder="Search Movies" name="movie" class="discover__input">

            <select class="discover__select">
            <option>Popularity Descending</option>
            <option>Popularity Ascending</option>
            <option>Release Date Descending</option>
            <option>Release Date Ascending</option>
            <option>Vote Average Descending</option>
            <option>Vote Average Ascending</option>
            </select>

            <select class="discover__select">
            <option disabled selected>Genre</option>
            <option>Horror</option>
            <option>Comedy</option>
            <option>Action</option>
            <option>Crime</option>
            <option>Drama</option>
            </select>
        </form>
        <div class="discover__submit">
            <input type="submit" value="Search">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.discover__container {
    padding-top: 100px;
}
</style>