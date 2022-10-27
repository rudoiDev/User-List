//firebase
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

// MUI
import Alert from '@mui/material/Alert'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

// import
import styles from './login.module.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { emailHandle, textHandle, alertError } from '../helpers/validate'
import { setUser } from '@/redux/slices/dataSlice'

export default () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [alert, setAlert] = useState(false)
  const [show, setShow] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const errorAlert = useRef()
  const passwordInput = useRef()

  const submitLogin = (e) => {
    e.preventDefault()
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
        navigate('/')
      })
      .catch((e) => {
        console.error(e)
        alertError(setAlert, errorAlert)
      })
  }

  const showHandle = () => {
    setShow((prevState) => !prevState)
    if (passwordInput.current.getAttribute('type') == 'password') {
      passwordInput.current.setAttribute('type', 'text')
    } else {
      console.log(passwordInput.current.getAttribute('type'))
      passwordInput.current.setAttribute('type', 'password')
    }
  }

  return (
    <>
      {alert ? (
        <Alert
          severity="error"
          sx={{ zIndex: 10 }}
          className="animate__animated animate__bounce"
          ref={errorAlert}
        >
          Ошибка! Проверьте правильность заполнения полей!
        </Alert>
      ) : null}
      <div className={cn(styles.wrapper)}>
        <div className={cn(styles.container)}>
          <form className="row g-3">
            <strong className={cn(styles.strong)}>
              Войдите в учетную запись
            </strong>
            <div className="col-md-12 p-0">
              <label htmlFor="validationServer03" className="form-label">
                Почта*
              </label>
              <input
                type="text"
                className={`${cn(styles.input)} form-control`}
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
                placeholder="Введите email ..."
                value={email}
                onChange={(e) => {
                  emailHandle(e)
                  setEmail(e.target.value)
                }}
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Ошибка!
              </div>
              <div className="valid-feedback">Все хорошо!</div>
            </div>
            <div className="col-md-12 p-0">
              <label htmlFor="validationServerUsername" className="form-label">
                Пароль*
              </label>
              <div className="input-group has-validation">
                <span
                  className={`${cn(styles.passwordShow)} input-group-text`}
                  id="inputGroupPrepend3"
                  onClick={showHandle}
                >
                  {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </span>
                <input
                  ref={passwordInput}
                  type="password"
                  className={`${cn(styles.input)} form-control`}
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  required
                  value={pass}
                  onChange={(e) => {
                    textHandle(e)
                    setPass(e.target.value)
                  }}
                  placeholder="Введите пароль ..."
                  maxLength="40"
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  Ошибка!
                </div>
                <div className="valid-feedback">Все хорошо!</div>
              </div>
            </div>
            <button
              className={cn(styles.btn)}
              type="submit"
              onClick={submitLogin}
            >
              Войти
            </button>
            <Link to="/register" style={{ textAlign: 'center' }}>
              Еще нет акаунта? Зарегистрируйтесь!
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}
