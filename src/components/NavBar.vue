<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/">NestJS</router-link>
    <router-link to="/">Vue 3</router-link>
    <router-link to="/notes">Notes App</router-link>
  </nav>
</template>

<style lang="postcss" scoped>
  a {
    @apply underline p-4;
  }
</style>
