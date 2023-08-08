<template>
  <div class="image-list">
    <div v-for="item in imageList" :key="item.id">
      <ListItem :image="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListItem from '@/components/molecules/list-item/list-item.vue'

export default defineComponent({
  components: { ListItem },
  props: {
    imageList: Array
  }
})
</script>
<style scoped>
@import './image-list.css';
</style>
