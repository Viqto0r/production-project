import { type IStateSchema } from '@/app/providers/StoreProvider'

export const getFormData = (state: IStateSchema) => state.profile?.form
