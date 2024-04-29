import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getCounter = (state: IStateSchema) => state.counter
