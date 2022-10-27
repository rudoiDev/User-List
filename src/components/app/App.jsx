import { Routes, Route } from 'react-router-dom'
import Main from '../main/Main'
import User from '../user/User'
import Login from '../login/Login'
import Register from '../register/Register'
import Error from '../404/Error'
import './app.scss'

export default () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
