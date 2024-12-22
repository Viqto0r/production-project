import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { type IStateSchema } from '@/app/providers/StoreProvider'
import {
  EArticleSortField,
  EArticleType,
  EArticleView,
  type IArticle,
} from '@/entities/Article'
import { type IArticlePageSchema } from '../types/articlePageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { ESortOrderType } from '@/shared/types/sort'

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
    limit: 9,
    sort: EArticleSortField.CREATED,
    order: ESortOrderType.ASC,
    search: '',
    type: EArticleType.ALL,
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

    setSort(state, { payload }: PayloadAction<EArticleSortField>) {
      state.sort = payload
    },

    setSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload
    },

    setOrder(state, { payload }: PayloadAction<ESortOrderType>) {
      state.order = payload
    },

    setType(state, { payload }: PayloadAction<EArticleType>) {
      state.type = payload
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
      .addCase(fetchArticlesList.pending, (state, { meta }) => {
        state.isLoading = true
        state.error = undefined

        if (meta.arg.isReplace) {
          articlesAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticlesList.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload
      })
      .addCase(fetchArticlesList.fulfilled, (state, { payload, meta }) => {
        state.isLoading = false
        state.error = undefined
        state.hasMore = payload.length >= state.limit

        meta.arg.isReplace
          ? articlesAdapter.setAll(state, payload)
          : articlesAdapter.addMany(state, payload)
      })
  },
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice
