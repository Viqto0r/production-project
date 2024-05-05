import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getLoginError = (state: IStateSchema) => {
  return state?.loginForm?.error
}
