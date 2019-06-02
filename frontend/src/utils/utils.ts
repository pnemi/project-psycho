export const shuffle = (array: Array<any>): Array<any> => {
  for (let i = array.length; i; i--) {
    const randomized = Math.floor(Math.random() * i)
    ;[array[i - 1], array[randomized]] = [array[randomized], array[i - 1]]
  }
  return array
}

export const truncate = (str: string, n: number): string =>
  `${str.substr(0, n)}${str.length > n ? '...' : ''}`

export const randArrayItem = (arr: Array<any>) =>
  arr[Math.floor(Math.random() * arr.length)]
