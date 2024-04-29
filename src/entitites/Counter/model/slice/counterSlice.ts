import { createSlice } from '@reduxjs/toolkit'
import { type ICounterSchema } from 'entitites/Counter/'

const initialState: ICounterSchema = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      console.log('increment')
      state.value += 1
    },
    decrement: (state) => {
      console.log('decrement')
      state.value -= 1
    },
  },
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice
