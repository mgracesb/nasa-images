<template>
  <main>
    <SearchBar @search="search" />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import SearchBar from '@/components/molecules/search-bar/search-bar.vue'
import { searchImages } from '@/domain/ImageCollection/ImageCollectionApi.js'
export default defineComponent({
  components: { SearchBar },
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
        const results = await searchImages(data)
        imageCollection.value = results
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    const loadMore = async () => {
      currentPage.value++

      try {
        const results = await searchImages(currentPage)
        imageCollection.value = results
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    return { search }
  }
})
</script>
