import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../slices/authSlice'
import bannersReducer from '../slices/bannersSlice'
import discountedProductsReducer from '../slices/discountedProductsSlice'
import popularProductsReducer from '../slices/popularProductsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    banners: bannersReducer,
    discountedProducts: discountedProductsReducer,
    popularProducts: popularProductsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
