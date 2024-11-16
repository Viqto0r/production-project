import { type EntityState } from '@reduxjs/toolkit'
import { type EArticleView, type IArticle } from 'entities/Article'

export interface IArticlePageSchema extends EntityState<IArticle> {
  isLoading?: boolean
  error?: string
  view: EArticleView

  // pagination
  page: number
  limit?: number
  hasMore: boolean

  _isInit?: boolean
}
