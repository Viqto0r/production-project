import { type EntityState } from '@reduxjs/toolkit'
import {
  type EArticleType,
  type EArticleSortField,
  type EArticleView,
  type IArticle,
} from '@/entities/Article'
import { type ESortOrderType } from '@/shared/types/sort'

export interface IArticlePageSchema extends EntityState<IArticle> {
  isLoading?: boolean
  error?: string

  // pagination
  page: number
  limit: number
  hasMore: boolean

  // filters
  view: EArticleView
  order: ESortOrderType
  sort: EArticleSortField
  search: string
  type: EArticleType

  _isInit?: boolean
}
