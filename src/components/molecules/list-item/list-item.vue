<template>
  <div class="card" :class="{ 'is-flipped': isFlipped }">
    <div class="card__side card__side--front">
      <CardThumbnail :thumbnail="thumbnail" />
      <button class="card__button" @click="flipCard">
        Flip
        <img src="@/assets/right.png" class="card__button__image" />
      </button>
    </div>

    <div class="card__side card__side--back">
      <div class="card__content">
        <h2 class="text__medium--bold">{{ title }}</h2>
        <CardDate :date="date" />
        <div class="card__keywords">
          <CardKeyword :tag="keyword" v-for="(keyword, index) in keywords" :key="index" />
        </div>
      </div>
      <button class="card__button" @click="flipCard">
        <img src="@/assets/left.png" class="card__button__image" />
        Back
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CardKeyword from '@/components/atoms/card-tag/card-tag.vue'
import CardThumbnail from '@/components/atoms/card-thumbnail/card-thumbnail.vue'
import CardDate from '@/components/molecules/card-date/card-date.vue'

export default defineComponent({
  components: { CardKeyword, CardThumbnail, CardDate },
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
