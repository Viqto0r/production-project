import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getProfileIsLoading = (state: IStateSchema) =>
  state.profile?.isLoading
