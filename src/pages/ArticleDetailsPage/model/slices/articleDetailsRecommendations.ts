import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { type IStateSchema } from '@/app/providers/StoreProvider'
import { type IArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema'
import { type IArticle } from '@/entities/Article'
import { fetchArticlesRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations'

const recommendationsAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
})

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<IStateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState()
  )

const articleDetailsRecommendations = createSlice({
  name: 'articleDetailsRecommendations',
  initialState:
    recommendationsAdapter.getInitialState<IArticleDetailsRecommendationsSchema>(
      {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
      }
    ),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticlesRecommendations.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticlesRecommendations.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
      .addCase(fetchArticlesRecommendations.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = undefined
        recommendationsAdapter.setAll(state, payload)
      })
  },
})

export const { reducer: articleDetailsRecommendationsReducer } =
  articleDetailsRecommendations
