import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../slices/userSlice'
import dataSlice from '../slices/dataSlice'

export default configureStore({
  reducer: {
    storage: userSlice,
    userInfo: dataSlice,
  },
})
