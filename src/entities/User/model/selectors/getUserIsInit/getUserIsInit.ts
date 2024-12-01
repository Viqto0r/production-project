import { type IStateSchema } from '@/app/providers/StoreProvider'

export const getUserIsInit = (state: IStateSchema) => state.user._isInit
