class ImageUrlsFactory {
  constructor() {
    this.image = {}
  }

  getThumbnailUrl(urls) {
    const THUMBNAIL_LITERAL = '~thumb'
    const thumbnail = urls.filter((url) => url.includes(THUMBNAIL_LITERAL))

    this.image = thumbnail.join(', ')

    return this.image
  }
}

export default new ImageUrlsFactory()
