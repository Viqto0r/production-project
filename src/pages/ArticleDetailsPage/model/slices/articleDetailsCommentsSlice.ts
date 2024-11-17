import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { type IComment } from 'entities/Comment'
import { type IArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<IStateSchema>(
  (state) =>
    state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<IArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = undefined
        commentsAdapter.setAll(state, payload)
      })
  },
})

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice
