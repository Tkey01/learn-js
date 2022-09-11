const data = {
  a: 1,
  b: 2,
  c: {
    b: [
      {
        access_token: null,
        aasdasddD12: [
          {
            b: {
              access_token: 'dqwdqwdqwd',
            },
          },
        ],
      },
    ],
  },
}

const findAccessToken = (data) => {
  if (typeof data === 'object' && data !== null) {
    if (typeof data.access_token === 'string' && data.access_token.length) {
      return data.access_token
    }

    const arr = Object.values(data)

    for (let i = 0; i < arr.length; i++) {
      const accessToken = findAccessToken(arr[i])

      if (accessToken) {
        return accessToken
      }
    }
  }

  return null
}

console.log(findAccessToken(data))
