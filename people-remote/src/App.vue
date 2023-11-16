<script setup lang="ts">
import PeopleList from './components/PeopleList.vue';

const numberOfRowsToRender = 5;
</script>

<template>
  <div>
    <PeopleList :numberOfRowsToRender="numberOfRowsToRender" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
