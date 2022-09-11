function downLoadVideo() {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://127.0.0.1:5500/big_buck_bunny.mp4', true)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    var urlCreator = window.URL || window.webkitURL
    console.log(this.response)
    var imageUrl = urlCreator.createObjectURL(this.response)
    var tag = document.createElement('a')
    tag.href = imageUrl
    tag.target = '_blank'
    tag.download = 'sample.mp4'
    document.body.appendChild(tag)
    // tag.click()
    document.body.removeChild(tag)
  }
  xhr.onerror = (err) => {
    alert('Failed to download picture')
  }
  xhr.send()
}

const downloadVideo2 = () => {
  fetch('http://localhost:4000/sample.mp4', {
    method: 'GET',
  }).then(async (response) => {
    const reader = response.body.getReader()

    const contentLength = +response.headers.get('Content-Length')

    let receivedLength = 0 // количество байт, полученных на данный момент
    let chunks = [] // массив полученных двоичных фрагментов (составляющих тело ответа)

    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      chunks.push(value)
      receivedLength += value.length

      console.log(`Получено ${receivedLength} из ${contentLength}`)
    }

    let blob = new Blob(chunks)

    const urlCreator = window.URL || window.webkitURL
    const imageUrl = urlCreator.createObjectURL(blob)
    const tag = document.createElement('a')
    tag.href = imageUrl
    tag.target = '_blank'
    tag.download = 'sample.mp4'

    document.body.appendChild(tag)
    tag.click()
    document.body.removeChild(tag)
  })
}

// downLoadVideo()
downloadVideo2()
