import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import BannerService from '../services/bannersService'

const initialState = {
  banners: [],
  loading: true,
  error: false,
}

export const getBanners = createAsyncThunk('banners/getBanners', async () => {
  return await BannerService.getBanners()
})

const bannerSlice = createSlice({
  name: 'banners',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBanners.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getBanners.fulfilled, (state, action) => {
        state.banners = action.payload
        state.loading = false
      })
      .addCase(getBanners.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

export default bannerSlice.reducer
