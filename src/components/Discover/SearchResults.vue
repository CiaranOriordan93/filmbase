<template>
    <div class="results">
        <div class="results__container">
            <Result v-for="i in string"></Result>
        </div>
        <div class="results__navigation">
            <button class="results__navigation__btn">Previous</button>
            <button class="results__navigation__btn">Next</button>
        </div>
    </div>
</template>

<script>
import Result from '../../components/Discover/Result'
    export default {
        components: {
            Result
        },
        data() {
            return {
                string: 3
            }
        }
    }
</script>

<style>

</style>