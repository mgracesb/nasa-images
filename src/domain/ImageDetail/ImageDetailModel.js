export default class ImageDetailModel {
  constructor(imageDetailData) {
    this.id = imageDetailData.id
    this.date_created = imageDetailData.date_created
    this.description = imageDetailData.description
    this.keywords = imageDetailData.keywords
    this.title = imageDetailData.title
    this.thumbnail = imageDetailData.thumbnail
  }
}
