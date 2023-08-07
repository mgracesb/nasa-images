import ImageCollectionApi from '@/domain/ImageCollection/ImageCollectionApi'

export async function searchImages({ commit }, data) {
  const imageCollection = new ImageCollectionApi()
  const searchRequest = imageCollection.searchImages(data)

  return searchRequest
    .then((res) => res)
    .catch((error) => {
      commit('error/setError', error, { root: true })
      return Promise.reject(error)
    })
}
