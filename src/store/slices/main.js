import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { request } from 'helpers/axios'

const main = createSlice({
  name: 'main',
  initialState: {},
  reducers: {},
  extraReducers: builder => {
    builder
  },
})

export const { setLoading } = main.actions
export default main.reducer
