<template>
  <div class="selector">
    <div class="selector__content">
      <p class="selector__title text__medium">Filter by year:</p>
      <select :value="modelValue" @change="filterByYear">
        <option value="">All Years</option>
        <option v-for="(year, index) in years" :key="index" :value="year">
          {{ year }}
        </option>
      </select>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: String,
    years: Array
  },
  setup(props, { emit }) {
    const filterByYear = (e: Event): void => {
      emit('filter', e.target.value)
      emit('update:modelValue', e.target.value)
    }
    return {
      filterByYear
    }
  }
})
</script>

<style scoped>
@import './year-selector.css';
</style>
