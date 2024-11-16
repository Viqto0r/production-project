import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type IScrollSaverSchema } from '../types/scrollSaverSchema'

const initialState: IScrollSaverSchema = {
  scroll: {},
}

interface IScrollPayload {
  path: string
  position: number
}

const scrollSaverSlice = createSlice({
  name: 'scrollSaver',
  initialState,
  reducers: {
    setScrollPosition(state, { payload }: PayloadAction<IScrollPayload>) {
      const { path, position } = payload

      state.scroll[path] = position
    },
  },
})

export const { actions: scrollSaverActions } = scrollSaverSlice
export const { reducer: scrollSaverReducer } = scrollSaverSlice
