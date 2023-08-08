<template>
  <div class="thumbnail">
    <a :href="thumbnail" class="thumbnail__link" target="_blank" rel="noopener noreferrer"></a>
    <img :src="thumbnail" class="thumbnail__image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    thumbnail: String
  }
})
</script>
<style scoped>
@import './card-thumbnail.css';
</style>
