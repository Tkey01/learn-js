const getImg64 = async () => {
  const convertImgToBase64URL = (url) => {
    console.log(url)
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'Anonymous'
      img.onload = () => {
        let canvas = document.createElement('CANVAS')
        const ctx = canvas.getContext('2d')
        canvas.height = img.height
        canvas.width = img.width
        ctx.drawImage(img, 0, 0)
        const dataURL = canvas.toDataURL()
        canvas = null
        resolve(dataURL)
      }
      img.src = url
    })
  }
  //for the demonstration purposes I used proxy server to avoid cross origin error
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const image = await convertImgToBase64URL(
    proxyUrl +
      'https://image.shutterstock.com/image-vector/vector-line-icon-hello-wave-260nw-1521867944.jpg',
  )
  console.log(image)
}
getImg64()
