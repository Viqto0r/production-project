const { capitalize } = require('../capitalize')

const reduxSliceTemplate = (slice) => {
  return `import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type I${capitalize(slice)}Schema } from '../types/${slice}Schema'

const initialState: I${capitalize(slice)}Schema = {}

const ${slice}Slice = createSlice({
  name: '${slice}',
  initialState,
  reducers: {
    set(state, { payload }: PayloadAction<unknown>) {}
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

export const { actions: ${slice}Actions, reducer: ${slice}Reducer } = ${slice}Slice
`
}

module.exports = { reduxSliceTemplate }
