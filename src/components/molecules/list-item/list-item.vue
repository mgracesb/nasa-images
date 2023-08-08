<template>
  <div class="list-item">
    <CardTitle :title="title" />
    <CardDate :date="date" />
    <CardKeywords :keywords="keywords" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardTitle from '@/components/atoms/card-title/card-title.vue'
import CardKeywords from '@/components/atoms/card-tag/card-tag.vue'
import CardDate from '@/components/molecules/card-date/card-date.vue'

export default defineComponent({
  components: { CardTitle, CardKeywords, CardDate },
  props: {
    title: String,
    date: String,
    keywords: Array
  }
})
</script>
<style scoped>
@import './list-item.css';
</style>
