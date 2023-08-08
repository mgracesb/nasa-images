import ImageCollectionModel from './ImageCollectionModel'
import { getImageUrls } from '@/domain/ImageUrls/ImageUrlsApi'

class ImageCollectionFactory {
  constructor() {
    this.image = {}
  }

  async getImageData(image) {
    const imageUrlList = await getImageUrls(image.href)

    this.image = new ImageCollectionModel({
      data: image.data,
      images: imageUrlList
    })

    return this.image
  }

  async getCollection(imageCollection) {
    const imageList = await Promise.all(
      imageCollection.map(async (image) => {
        return await this.getImageData(image)
      })
    )

    return imageList
  }
}

export default new ImageCollectionFactory()
