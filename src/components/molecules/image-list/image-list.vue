<template>
  <div class="list" @scroll="handleScroll">
    <div v-for="item in imageList" :key="item.id" class="list__item">
      <ListItem
        :title="item.data.title"
        :thumbnail="item.href"
        :date="item.data.date_created"
        :keywords="item.data.keywords"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ListItem from '@/components/molecules/list-item/list-item.vue'

export default defineComponent({
  components: { ListItem },
  props: {
    imageList: Array
  },
  setup(_, { emit }) {
    const isEndList = ref<boolean>(false)

    const handleScroll = (e): void => {
      const clientHeight = e.target.clientHeight
      const scrollHeight = e.target.scrollHeight
      const scrollTop = e.target.scrollTop

      if (scrollTop + clientHeight >= scrollHeight) {
        isEndList.value = true
        emit('load-more')
      } else {
        isEndList.value = false
      }
    }

    return { handleScroll }
  }
})
</script>
<style scoped>
@import './image-list.css';
</style>
