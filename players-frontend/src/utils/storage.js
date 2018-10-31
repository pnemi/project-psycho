const prefix = 'psycho'

export const save = (key, value) => {
  const serializedValue = JSON.stringify(value)
  window.localStorage.setItem(`${prefix}_${key}`, serializedValue)
}

export const load = (key) => {
  const serializedValue = window.localStorage.getItem(`${prefix}_${key}`)
  return JSON.parse(serializedValue)
}
