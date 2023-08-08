export async function getImageUrls(data) {
  try {
    const response = await fetch(data)
    const responseData = await response.json()

    return responseData
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching images')
  }
}
