import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import ProductService from '../services/productService'

const initialState = {
  products: [],
  loading: true,
  error: false,
}

export const getDiscountedProducts = createAsyncThunk(
  'discountedProducts/getProducts',
  async () => {
    return await ProductService.getDiscountedProducts()
  }
)

const discountedProductsSlice = createSlice({
  name: 'popularProducts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDiscountedProducts.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getDiscountedProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.loading = false
      })
      .addCase(getDiscountedProducts.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

export default discountedProductsSlice.reducer
