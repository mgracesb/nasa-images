<template>
  <div class="image-list">
    <div v-for="item in imageList" :key="item.id">
      <ListItem
        :title="item.data.title"
        :thumbnail="item.images"
        :date="item.data.date_created"
        :keywords="item.data.keywords"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import ListItem from '@/components/molecules/list-item/list-item.vue'

export default defineComponent({
  components: { ListItem },
  props: {
    imageList: Array
  },
  setup(props) {
    onMounted(() => {
      console.log('MOUNTED-', props.imageList)
    })
  }
})
</script>
<style scoped>
@import './image-list.css';
</style>
