import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getLoginState = (state: IStateSchema) => state.loginForm
