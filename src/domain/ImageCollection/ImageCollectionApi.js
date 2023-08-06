fetch('https://images-api.nasa.gov/search?q=a&media_type=image')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
