<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Hello World');
const description = ref('This is a description');
</script>

<style scoped></style>
