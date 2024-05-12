import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getProfileData = (state: IStateSchema) => state.profile?.data
