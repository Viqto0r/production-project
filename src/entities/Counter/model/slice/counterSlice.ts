import { buildSlice } from '@/shared/lib/store/buildSlice'
import { type ICounterSchema } from '../types/counterSchema'

const initialState: ICounterSchema = {
  value: 0,
}

const counterSlice = buildSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const {
  useActions: useCounterActions,
  reducer: counterReducer,
  actions: counterActions,
} = counterSlice
