import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getProfileReadonly = (state: IStateSchema) =>
  state.profile?.readonly
