export const APP_INIT_BEGIN = 'APP_INIT_BEGIN'
export const APP_INIT_SUCCESS = 'APP_INIT_SUCCESS'

interface AppInitBeginAction {
  type: typeof APP_INIT_BEGIN
}

interface AppInitSuccessAction {
  type: typeof APP_INIT_SUCCESS
}

export type AppActionTypes = AppInitBeginAction | AppInitSuccessAction

export const appInitBegin = (): AppActionTypes => ({
  type: APP_INIT_BEGIN,
})

export const appInitSuccess = (): AppActionTypes => ({
  type: APP_INIT_SUCCESS,
})
