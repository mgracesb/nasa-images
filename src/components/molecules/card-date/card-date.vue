<template>
  <div class="card-date">
    <p>Date created:</p>
    <p>{{ date }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    date: String
  }
})
</script>

