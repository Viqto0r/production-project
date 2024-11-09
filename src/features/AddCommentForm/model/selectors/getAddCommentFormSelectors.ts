import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'

export const getAddCommentFormText = (state: IStateSchema) =>
  state.addCommentForm?.text ?? ''

export const getAddCommentFormError = (state: IStateSchema) =>
  state.addCommentForm?.error
