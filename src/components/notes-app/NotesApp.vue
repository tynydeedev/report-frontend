<template>
  <h1>Notes App</h1>

  <router-view />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {},
  });
</script>

<style lang="postcss" scoped>
  h1 {
    @apply text-3xl text-center;
  }
</style>
