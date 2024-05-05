import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getLoginIsLoading = (state: IStateSchema) => {
  return state.loginForm?.isLoading || false
}
