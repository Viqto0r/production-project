import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type INotificationButtonSchema } from '../types/notificationButtonSchema'

const initialState: INotificationButtonSchema = {}

const notificationButtonSlice = createSlice({
  name: 'notificationButton',
  initialState,
  reducers: {
    set(state, { payload }: PayloadAction<unknown>) {},
  },
  // extraReducers(builder) {
  //  builder
  //    .addCase(.pending, (state) => {
  //      state.isLoading = true
  //      state.error = undefined
  //    })
  //    .addCase(.rejected, (state, { payload }) => {
  //      state.isLoading = false
  //      state.error = payload
  //    })
  //    .addCase(.fulfilled, (state, { payload }) => {
  //      state.isLoading = false
  //    })
  // },
})

export const {
  actions: notificationButtonActions,
  reducer: notificationButtonReducer,
} = notificationButtonSlice
