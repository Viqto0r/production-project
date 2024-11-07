import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getProfileValidateErrors = (state: IStateSchema) =>
  state.profile?.validateErrors
