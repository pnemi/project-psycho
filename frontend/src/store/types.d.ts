declare interface StorePayload {
  type: string
  payload?: any
}

declare interface FetchableState {
  data: object | Array<any>
  loading: boolean
  error: any
}
