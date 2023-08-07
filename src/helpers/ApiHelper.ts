export const ITEMS_PER_PAGE = 25

export function getParameterUrl(
  route: string,
  query: string,
  page: number,
  itemsPerPage = ITEMS_PER_PAGE
) {
  const parameterUrl = `${route}?q=${query}&page=${page}&page_size=${itemsPerPage}&media_type=image`

  return parameterUrl
}
