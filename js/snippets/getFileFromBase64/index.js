const elem = document.querySelector('#text')

const getFileFromBase64 = async (baseStr, fileName, mimeType) => {
  return fetch(baseStr)
    .then((res) => {
      return res.arrayBuffer()
    })
    .then((res) => {
      return new File([res], filename, { type: mimeType })
    })
}

const dataURLtoFile = (dataurl, filename) => {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  n -= 1

  while (n) {
    u8arr[n] = bstr.charCodeAt(n)
    n -= 1
  }

  return new File([u8arr], filename, { type: mime })
}

elem.addEventListener('change', async (e) => {
  console.log('change')
  const value = e.target.value

  const res = await dataURLtoFile(value, '1.png')
  console.log(res)
})
