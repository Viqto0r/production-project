import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getLoginUsername = (state: IStateSchema) => {
  return state?.loginForm?.username || ''
}
