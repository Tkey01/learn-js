const container = document.createElement('div')
container.classList.add('live_search')

const input = document.createElement('input')
input.classList.add('live-search__input')

const results = document.createElement('div')
input.classList.add('live-search__results')

container.append(input)
container.append(results)
document.body.append(container)

const fakeFetch = async (id, abortController) => {
  const delay = Math.floor(Math.random() * 10)

  console.log(`Fetch started with id - ${id} and delay - ${delay}`)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!abortController.signal) {
        resolve(`Fetched data received, id - ${id}`)
      } else {
        reject(`Fetch interrupted - id ${id}`)
      }
    }, delay * 1000)
  })
}

let id = 0
let requests = []

const action = async () => {
  if (
    requests.length &&
    !requests[requests.length - 1].abortController.signal
  ) {
    requests[requests.length - 1].abortController.signal = true
  }

  const abortController = { signal: false }
  requests.push({ promise: fakeFetch(id, abortController), abortController })

  const res = await requests[requests.length - 1].promise

  return res
}

input.addEventListener('keydown', async () => {
  console.log(requests)
  try {
    id++
    const res = await action()
    results.innerHTML = res
  } catch (e) {
    console.log(e)
  }
})
