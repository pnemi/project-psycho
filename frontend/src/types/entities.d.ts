type Role = {
  code: string
  order: number
  team: string
  required: boolean
  complement: boolean
  distributedDuringGame: boolean
  checked: boolean
  name: string
  description: string
}

type Translation = {
  code: string
  value: string
}

type Team = {
  code: string
  name: string
  description: string
}

type Language = {
  code: string
  name: string
}
