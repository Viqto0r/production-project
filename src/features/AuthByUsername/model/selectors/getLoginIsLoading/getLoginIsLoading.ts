import { type IStateSchema } from '@/app/providers/StoreProvider'

export const getLoginIsLoading = (state: IStateSchema) => {
  return state?.loginForm?.isLoading || false
}
