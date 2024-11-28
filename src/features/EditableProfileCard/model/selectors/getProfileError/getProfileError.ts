import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getProfileError = (state: IStateSchema) => state.profile?.error
