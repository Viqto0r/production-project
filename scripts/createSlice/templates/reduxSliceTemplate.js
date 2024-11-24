const reduxSliceTemplate = (slice) => {
  const sliceLC = slice.toLowerCase()

  return `import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type I${slice}Schema } from '../types/${sliceLC}Schema'

const initialState: I${slice}Schema = {}

const ${sliceLC}Slice = createSlice({
  name: '${sliceLC}',
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

export const { actions: ${sliceLC}Actions, reducer: ${sliceLC}Reducer } = ${sliceLC}Slice
`
}

module.exports = { reduxSliceTemplate }
