<template>
  <div>
    <input placeholder="search" />
    <router-link to="/notes/create">Create Note</router-link>
    <div v-for="note in notes" :key="note.id">
      <div>{{ note.name }}</div>
      <div>{{ note.description }}</div>
      <div>#{{ note.hashtags }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, ComputedRef, defineComponent, onMounted } from 'vue';
  import { useStore } from '../../store';
  import { Note } from './note-store';

  export default defineComponent({
    setup() {
      const store = useStore();

      onMounted(() => {
        store.dispatch('notes/getAllNotes');
      });

      const notes: ComputedRef<Note[]> = computed(() => store.state.notes.all);

      return {
        notes,
      };
    },
  });
</script>

<style lang="postcss" scoped></style>
