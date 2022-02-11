<template>
  <div>
    <router-link to="/notes/signin">
      Already have an account? Sign In
    </router-link>

    <router-link to="/notes/signup">Don't have an account? Sign Up</router-link>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {},
  });
</script>

<style lang="postcss" scoped>
  a {
    @apply text-center block;
  }
</style>
