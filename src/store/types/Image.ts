export interface ImageDataType {
  data: {
    id: string
    date_created: string
    keywords: string
    title: string
    thumbnail: string
  }
}

export interface ImageDataQueryType {
  query: string
  page: number
}

export interface ImageType {
  data: ImageDataType
  href: string
}


