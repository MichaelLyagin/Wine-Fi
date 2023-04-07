import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../slices/authSlice'
import bannersReducer from '../slices/bannersSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    banners: bannersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
