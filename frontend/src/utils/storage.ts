const prefix = 'psycho'

export const save = (key: string, value: any): void => {
  const serializedValue = JSON.stringify(value)
  window.localStorage.setItem(`${prefix}_${key}`, serializedValue)
}

export const load = (key: string, def: any = null): any => {
  try {
    const serializedValue = window.localStorage.getItem(`${prefix}_${key}`)
    if (!serializedValue) {
      return def
    }
    return JSON.parse(serializedValue)
  } catch {
    return def
  }
}
