<template>
  <form>
    <div>
      <label for="note-name">Name</label>
      <input type="text" id="note-name" v-model="noteName" />
    </div>
    <div>
      <label for="note-description">Description</label>
      <input type="text" id="note-description" v-model="noteDescription" />
    </div>
    <div>
      <label for="note-hashtags">Hashtags</label>
      <input type="text" id="note-hashtags" v-model="noteHashtags" />
    </div>
    <div>
      <label for="note-url">Url</label>
      <input type="text" id="note-url" v-model="noteUrl" />
    </div>
  </form>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const noteName = ref();
      const noteDescription = ref();
      const noteHashtags = ref();
      const noteUrl = ref();

      return {
        noteName,
        noteDescription,
        noteHashtags,
        noteUrl,
      };
    },
  });
</script>

<style lang="postcss" scoped></style>
