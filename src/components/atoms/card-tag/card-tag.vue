<template>
  <p class="tag text__small">{{ tag }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    tag: String
  }
})
</script>
<style scoped>
@import './card-tag.css';
</style>
