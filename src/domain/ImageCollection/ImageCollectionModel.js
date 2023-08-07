import ImageDetailFactory from '@/domain/ImageDetail/ImageDetailFactory'

export default class ImageCollectionModel {
  constructor(imageCollectionData) {
    this.data = this.processDetails(imageCollectionData.data)
    this.href = imageCollectionData.href
  }

  processDetails(data) {
    return ImageDetailFactory.getImageDetail(data[0])
  }
}
