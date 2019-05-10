<template>
  <main class="main">
    <div class="browse">
      <div class="browse__heading">
        <a href="#" class="browse__category">MOVIES</a>
        <a href="#" class="browse__category">TV SHOWS</a>
      </div>
    </div>
    <CardList />
    <CardList />
    <CardList />
    <CardList />
    <CardList />
  </main>
</template>

<script>
import CardList from "@/components/CardList.vue";
export default {
  components: {
    CardList
  }
};
</script>
