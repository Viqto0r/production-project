import { createSlice } from '@reduxjs/toolkit'
import { type IArticleDetailsSchema } from '../types/articleDetailsSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'

const initialState: IArticleDetailsSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
}

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleById.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
      .addCase(fetchArticleById.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.data = payload
        state.error = undefined
      })
  },
})
export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
