<template>
  <div class="date">
    <p class="text__small">Date created:</p>
    <p class="text__medium">{{ formattedDate }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'

export default defineComponent({
  props: {
    date: String
  },
  setup(props) {
    const formattedDate = computed(() => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(props.date).toLocaleDateString(undefined, options)
    })

    return {
      formattedDate
    }
  }
})
</script>

<style scoped>
@import './card-date.css';
</style>
