import { configureStore } from '@reduxjs/toolkit'
import activeUserSlice from '../slices/activeUserSlice'

export const store = configureStore({
  reducer: {
    activeuser: activeUserSlice
  }
})