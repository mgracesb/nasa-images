<template>
  <main class="home">
    <AnimatedBg>
      <HeaderBlock />
      <SearchBar v-model="inputText" @search="search" @clear="clear" />
      <div v-show="isLoading" class="home__spinner">
        <Spinner />
      </div>
      <ImageList
        v-if="imageCollection.length"
        :image-list="imageCollection"
        @load-more="loadMore"
      />
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
import Spinner from '@/components/atoms/loading-spinner/loading-spinner.vue'

export default defineComponent({
  components: { SearchBar, ImageList, AnimatedBg, HeaderBlock, Spinner },
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
    const isLoading = ref(false)

    onMounted(() => {
      const storedPage = localStorage.getItem('currentPage')
      if (storedPage) {
        currentPage.value = parseInt(storedPage)
      }
    })
    const search = async (query: string) => {
      if (query === '') {
        clear()
        return
      }

      const data = {
        query: query,
        page: INITIAL_PAGE
      }
      isLoading.value = true

      searchValue.value = query
      searchData.value = data

      try {
        const results = await searchImageCollection(data)
        imageCollection.value = results
        isLoading.value = false
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    const clear = () => {
      searchData.value = {}
      imageCollection.value = []
      searchValue.value = ''
      currentPage.value = INITIAL_PAGE
    }

    const loadMore = async () => {
      const data = {
        query: searchValue.value,
        page: currentPage.value++
      }

      isLoading.value = true

      try {
        const results = await searchImageCollection(data)
        imageCollection.value.push(...results)
        isLoading.value = false
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    return { imageCollection, searchValue, isLoading, search, clear, loadMore }
  }
})
</script>

<style scoped>
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.home__spinner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.3)
}
</style>
