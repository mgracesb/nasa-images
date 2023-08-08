<template>
  <div class="card" :class="{ 'is-flipped': isFlipped }">
    <div class="card__side card__side--front">
      <CardThumbnail :thumbnail="thumbnail" />
      <button class="card__flip-btn" @click="flipCard">Flip</button>
    </div>

    <div class="card__side card__side--back">
      <div class="card__content">
        <CardTitle :title="title" />
        <CardDate :date="date" />
        <div v-for="(keyword, index) in keywords" :key="index">
          <CardKeyword :tag="keyword" />
        </div>
      </div>
      <button class="card__flip-btn" @click="flipCard">Back</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CardTitle from '@/components/atoms/card-title/card-title.vue'
import CardKeyword from '@/components/atoms/card-tag/card-tag.vue'
import CardThumbnail from '@/components/atoms/card-thumbnail/card-thumbnail.vue'
import CardDate from '@/components/molecules/card-date/card-date.vue'

export default defineComponent({
  components: { CardTitle, CardKeyword, CardThumbnail, CardDate },
  props: {
    title: String,
    date: String,
    keywords: Array,
    thumbnail: String
  },
  setup() {
    const isFlipped = ref(false)

    const flipCard = () => {
      isFlipped.value = !isFlipped.value
    }
    return {
      isFlipped,
      flipCard
    }
  }
})
</script>
<style scoped>
@import './list-item.css';
</style>
