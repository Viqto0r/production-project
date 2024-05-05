import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getLoginPassword = (state: IStateSchema) => {
  return state.loginForm?.password || ''
}
