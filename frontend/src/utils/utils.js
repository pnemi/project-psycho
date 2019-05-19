export const shuffle = (array) => {
  for (let i = array.length; i; i--) {
    const randomized = Math.floor(Math.random() * i)
    ;[array[i - 1], array[randomized]] = [array[randomized], array[i - 1]]
  }
  return array
}

export const truncate = (str, n) =>
  `${str.substr(0, n - 1)}${str.length > n ? '...' : ''}`

export const randArrayItem = (arr) =>
  arr[Math.floor(Math.random() * arr.length)]
