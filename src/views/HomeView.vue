<template>
  <main class="home">
    <AnimatedBg>
      <HeaderBlock />
      <SearchBar v-model="inputText" @search="search" @clear="clear" />
      <div v-show="isLoading" class="home__spinner">
        <Spinner />
      </div>
      <Selector
        v-if="uniqueYears.length"
        v-model="selectedYear"
        :years="uniqueYears"
        @filter="filterByYear"
      />
      <ImageList
        v-if="imageCollection.length"
        :image-list="imageCollection"
        @load-more="loadMore"
      />
    </AnimatedBg>
  </main>
</template>

<script lang="ts">
import { ComputedRef, computed, defineComponent, onMounted, ref } from 'vue'
import { searchImageCollection } from '@/domain/ImageCollection/ImageCollectionApi.js'
import SearchBar from '@/components/molecules/search-bar/search-bar.vue'
import ImageList from '@/components/molecules/image-list/image-list.vue'
import AnimatedBg from '@/components/molecules/animated-bg/animated-bg.vue'
import HeaderBlock from '@/components/organisms/header-block/header-block.vue'
import Spinner from '@/components/atoms/loading-spinner/loading-spinner.vue'
import Selector from '@/components/molecules/year-selector/year-selector.vue'
import { ImageType, ImageDataQueryType } from '@/store/types/Image'

export default defineComponent({
  components: { SearchBar, ImageList, AnimatedBg, HeaderBlock, Spinner, Selector },
  data() {
    return {
      inputText: ''
    }
  },
  setup() {
    const INITIAL_PAGE = 1
    const imageCollection = ref<ImageType[]>([])
    const currentPage = ref<number>(INITIAL_PAGE)
    const searchData = ref<object>({})
    const searchValue = ref<string>('')
    const isLoading = ref<boolean>(false)
    const selectedYear = ref<string>('')

    onMounted(() => {
      const storedPage = localStorage.getItem('currentPage')
      if (storedPage) {
        currentPage.value = parseInt(storedPage)
      }
    })

    const uniqueYears: ComputedRef<number[]> = computed(() => {
      const years = new Set<number>()

      imageCollection.value.forEach((item) => {
        const year = new Date(item.data.date_created).getFullYear()
        years.add(year)
      })

      return Array.from(years).sort((a: number, b: number) => a - b)
    })

    const filterByYear = (year: string): void | boolean => {
      selectedYear.value = year

      if (selectedYear.value === '') {
        search(searchValue.value)
      } else {
        imageCollection.value = imageCollection.value.filter((item) => {
          const year = new Date(item.data.date_created).getFullYear()
          return year === parseInt(selectedYear.value)
        })
      }
    }

    const search = async (query: string): Promise<void> => {
      if (query === '') {
        clear()
        return
      }

      const data: ImageDataQueryType = {
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

    const clear = (): void => {
      searchData.value = {}
      imageCollection.value = []
      searchValue.value = ''
      currentPage.value = INITIAL_PAGE
    }

    const loadMore = async (): Promise<void> => {
      if (selectedYear.value !== '') {
        return
      }

      currentPage.value += 1
      const data = {
        query: searchValue.value,
        page: currentPage.value
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

    return {
      imageCollection,
      searchValue,
      isLoading,
      selectedYear,
      uniqueYears,
      search,
      clear,
      loadMore,
      filterByYear
    }
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
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
@/store/types/Image
