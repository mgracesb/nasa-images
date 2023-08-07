<template>
  <div class="search-bar">
    <input type="text" v-model="searchQuery" @input="handleInput" placeholder="Search images..." />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(_, { emit }) {
    const searchQuery = ref<string>('')

    const handleInput = () => {
      emit('search', searchQuery.value)
    }
    return { searchQuery, handleInput }
  }
})
</script>

<style scoped>
@import './search-bar.css';
</style>
