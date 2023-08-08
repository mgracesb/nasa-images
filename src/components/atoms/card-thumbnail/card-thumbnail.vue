<template>
  <img :src="thumbnail" class="thumbnail"/>
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
