import ImageDetailFactory from '@/domain/ImageDetail/ImageDetailFactory'
import ImageUrlsFactory from '@/domain/ImageUrls/ImageUrlsFactory'
export default class ImageCollectionModel {
  constructor(imageCollectionData) {
    this.data = this.getDetails(imageCollectionData.data)
    this.images = this.getThumbnail(imageCollectionData.images)
  }

  getDetails(data) {
    return ImageDetailFactory.getImageDetail(data[0])
  }

  getThumbnail(data) {
    return ImageUrlsFactory.getThumbnailUrl(data)
  }
}
