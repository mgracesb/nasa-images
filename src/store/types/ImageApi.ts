export interface ImageApiDataType {
  center: string
  date_created: string
  description: string
  keywords: Array<string>
  media_type: string
  nasa_id: string
  title: string
}

export interface ImageApiLinksType {
  href: string
  rel: string
  render: string
}

export interface ImageApiType {
  data: Array<ImageApiDataType>
  href: string
  links: Array<ImageApiLinksType>
}
