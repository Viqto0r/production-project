import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getUserIsInit = (state: IStateSchema) => state.user._isInit
