<template>
  <main class="home">
    <AnimatedBg>
      <HeaderBlock />
      <SearchBar v-model="inputText" @search="search" @clear="clear" />
      <ImageList v-if="imageCollection.length" :image-list="imageCollection" />
    </AnimatedBg>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { searchImageCollection } from '@/domain/ImageCollection/ImageCollectionApi.js'
import SearchBar from '@/components/molecules/search-bar/search-bar.vue'
import ImageList from '@/components/molecules/image-list/image-list.vue'
import AnimatedBg from '@/components/molecules/animated-bg/animated-bg.vue'
import HeaderBlock from '@/components/organisms/header-block/header-block.vue'

export default defineComponent({
  components: { SearchBar, ImageList, AnimatedBg, HeaderBlock },
  data() {
    return {
      inputText: ''
    }
  },
  setup() {
    const INITIAL_PAGE = 1
    const imageCollection = ref([])
    const currentPage = ref(INITIAL_PAGE)
    const searchData = ref({})
    const searchValue = ref('')

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
      searchValue.value = query
      searchData.value = data

      try {
        const results = await searchImageCollection(data)

        imageCollection.value = results
        console.log('HOME->', imageCollection.value)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    const clear = () => {
      searchData.value = {}
      imageCollection.value = []
      searchValue.value = ''
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

    return { imageCollection, searchValue, search, clear }
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
