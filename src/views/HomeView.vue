<template>
  <main class="home">
    <SearchBar @search="search" />
    <ImageList v-if="imageCollection.length" :images="imageCollection" />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { searchImageCollection } from '@/domain/ImageCollection/ImageCollectionApi.js'
import SearchBar from '@/components/molecules/search-bar/search-bar.vue'
import ImageList from '@/components/molecules/image-list/image-list.vue'

export default defineComponent({
  components: { SearchBar, ImageList },
  setup() {
    const INITIAL_PAGE = 1
    const imageCollection = ref([])
    const currentPage = ref(INITIAL_PAGE)
    const searchData = ref({})

    onMounted(() => {
      const storedPage = localStorage.getItem('currentPage')
      if (storedPage) {
        currentPage.value = parseInt(storedPage)
      }
    })

    const search = async (query: string) => {
      const data = {
        query: query,
        page: INITIAL_PAGE
      }

      searchData.value = data

      try {
        const results = await searchImageCollection(data)

        imageCollection.value = results
        console.log('HOME->', imageCollection.value)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    const loadMore = async () => {
      currentPage.value++

      try {
        const results = await searchImageCollection(currentPage)
        imageCollection.value = results
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    return { imageCollection, search }
  }
})
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: blue;
}
</style>
