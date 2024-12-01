import { createSelector } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/StoreProvider'
import { type TScrollPosition } from '../types/scrollSaverSchema'

export const getScroll = (state: IStateSchema) => state.scrollSaver.scroll

export const getScrollByPath = createSelector(
  getScroll,
  (state: IStateSchema, path: string) => path,
  (scroll: TScrollPosition, path: string) => scroll[path] ?? 0
)
