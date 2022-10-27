import { createSlice } from '@reduxjs/toolkit'

const saveStorage = (state) => {
  localStorage.setItem('person', JSON.stringify(state))
}

export const dataUser = createSlice({
  name: 'person',
  initialState: {
    userParams: {
      email: null,
      token: null,
      id: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.userParams.email = action.payload.email
      state.userParams.token = action.payload.token
      state.userParams.id = action.payload.id
      saveStorage(state.userParams)
    },
  },
})

export const { setUser } = dataUser.actions

export default dataUser.reducer
