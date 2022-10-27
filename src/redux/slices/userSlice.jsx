import { createSlice } from '@reduxjs/toolkit'

const saveStorage = (state) => {
  localStorage.setItem('users', JSON.stringify(state))
}

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    valueLike: {},
  },
  reducers: {
    getLike: (state, action) => {
      const userNumber = action.payload
      const stateUser = state.valueLike[userNumber]
      state.valueLike[userNumber] = !stateUser
      saveStorage(state.valueLike)
    },
    getData: (state, action) => {
      state.valueLike = action.payload
      saveStorage(state.valueLike)
    },
  },
})

export const { getLike, getData } = userSlice.actions

export const valueLike = (state) => state.storage.valueLike

export default userSlice.reducer
