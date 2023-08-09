<template>
  <div class="search">
    <input
      type="text"
      :value="modelValue"
      @input="handleInput"
      placeholder="Type to start searching"
      class="search__input"
    />
    <button class="search__button" @click="clearSearch">clear</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: String
  },
  setup(props, { emit }) {
    const handleInput = (e: Event): void => {
      emit('search', e.target.value)
      emit('update:modelValue', e.target.value)
    }

    const clearSearch = (): void => {
      emit('clear')
      emit('update:modelValue', '')
    }

    return { handleInput, clearSearch }
  }
})
</script>

<style scoped>
@import './search-bar.css';
</style>
