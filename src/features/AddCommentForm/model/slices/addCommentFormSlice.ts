import { createSlice } from '@reduxjs/toolkit'
import { type IAddCommentFormSchema } from '../types/addCommentForm'

const initialState: IAddCommentFormSchema = {
  error: '',
  text: '',
}

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText(state, { payload }) {
      state.text = payload
    },
  },
  extraReducers(builder) {
    // builder
    //  .addCase(loginByUsername.pending, (state) => {
    //    state.isLoading = true
    //    state.error = undefined
    //  })
    //  .addCase(loginByUsername.rejected, (state, { payload }) => {
    //    state.isLoading = false
    //    state.error = payload
    //  })
    //  .addCase(loginByUsername.fulfilled, (state, { payload }) => {
    //    state.isLoading = false
    //    state.username = payload.username
    //  })
  },
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
