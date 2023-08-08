import { getParameterUrl } from '@/helpers/ApiHelper'
import ImageCollectionFactory from './ImageCollectionFactory'

const SEARCH_IMAGES = 'https://images-api.nasa.gov/search'

export async function searchImageCollection(data) {
  const parameterUrl = getParameterUrl(SEARCH_IMAGES, data.query, data.page)

  try {
    const response = await fetch(parameterUrl)
    const responseData = await response.json()
    const responseDataList = await ImageCollectionFactory.getCollection(
      responseData.collection.items
    )

    const transformToArray = Object.values(responseDataList)

    return transformToArray
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching images')
  }
}
