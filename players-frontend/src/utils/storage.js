const prefix = 'psycho'

export const save = (key, value) => {
  const serializedValue = JSON.stringify(value)
  window.localStorage.setItem(`${prefix}_${key}`, serializedValue)
}

export const load = (key, def = '') => {
  const serializedValue = window.localStorage.getItem(`${prefix}_${key}`)
  try {
    return JSON.parse(serializedValue)
  } catch {
    return def
  }
}
