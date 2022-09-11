const fetchEx = () => Promise.resolve()

const randomAsyncAction = async () => {
  const res = await fetchEx()
  console.log(res)
}

const preventAsync = () => {
  let isLoading = false
  console.log('preventAsync - ', isLoading)

  return () => {
    console.log('start async action')
    if (!isLoading) {
      randomAsyncAction()
      isLoading = true
    } else {
      console.log('stoped action')
    }
  }
}

const el = document.querySelector('button')
el.addEventListener('click', preventAsync())
