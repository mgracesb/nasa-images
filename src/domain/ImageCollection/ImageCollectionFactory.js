import ImageCollectionModel from './ImageCollectionModel'

class ImageCollectionFactory {
  constructor() {
    this.image = {}
  }
  
  getImageData(image) {
    this.image = new ImageCollectionModel({
      data: image.data,
      href: image.href
    })

    return this.image
  }

  getCollection(imageCollection) {
    const imageList = imageCollection.map((image) => this.getImageData(image))

    return imageList
  }
}

export default new ImageCollectionFactory()
