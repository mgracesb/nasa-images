import ImageDetailModel from './ImageDetailModel'

class ImageDetailFactory {
  constructor() {
    this.image = {}
  }
  getImageDetail(image) {
    this.image = new ImageDetailModel({
      id: image.nasa_id,
      date_created: image.date_created,
      description: image.description,
      keywords: image.keywords,
      title: image.title,
      thumbnail: image.href
    })

    return this.image
  }
}

export default new ImageDetailFactory()
