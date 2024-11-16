import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { EArticleView, type IArticle } from 'entities/Article'
import { type IArticlePageSchema } from '../types/articlePageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const articlesAdapter = createEntityAdapter<IArticle>({
  selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<IArticlePageSchema>({
    isLoading: false,
    error: undefined,
    view: EArticleView.SMALL,
    page: 1,
    hasMore: true,
    ids: [],
    entities: {},
    _isInit: false,
  }),
  reducers: {
    setView(state, { payload }: PayloadAction<EArticleView>) {
      state.view = payload
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, payload)
    },

    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload
    },

    setLimit(state, { payload }: PayloadAction<number>) {
      state.limit = payload
    },

    setHasMore(state, { payload }: PayloadAction<boolean>) {
      state.hasMore = payload
    },

    initState(state) {
      const view = localStorage.getItem(
        ARTICLES_VIEW_LOCALSTORAGE_KEY
      ) as EArticleView

      state.view = view
      state.limit = view === EArticleView.BIG ? 4 : 9
      state._isInit = true
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
        state.hasMore = payload.length > 0

        articlesAdapter.addMany(state, payload)
      })
  },
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice
