import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { EArticleView, type IArticle } from 'entities/Article'
import { type IArticlePageSchema } from '../types/articlePageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: articlesAdapter.getInitialState<IArticlePageSchema>({
    isLoading: false,
    error: undefined,
    view: EArticleView.SMALL,
    ids: [],
    entities: {},
  }),
  reducers: {
    setView(state, { payload }: PayloadAction<EArticleView>) {
      state.view = payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, payload)
    },

    initState(state) {
      console.log(localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY))
      state.view = localStorage.getItem(
        ARTICLES_VIEW_LOCALSTORAGE_KEY
      ) as EArticleView
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticlesList.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
      .addCase(fetchArticlesList.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.error = undefined
        articlesAdapter.setAll(state, payload)
      })
  },
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice
