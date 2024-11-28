import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getFormData = (state: IStateSchema) => state.profile?.form
