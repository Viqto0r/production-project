import { type IStateSchema } from '@/app/providers/StoreProvider'

export const getLoginError = (state: IStateSchema) => {
  return state?.loginForm?.error
}
