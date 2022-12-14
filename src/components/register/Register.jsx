// firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

// MUI
import Alert from '@mui/material/Alert'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

// imports
import styles from './register.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '@/redux/slices/dataSlice'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import { emailHandle, textHandle, alertError } from '../helpers/validate'

export default () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [alert, setAlert] = useState(false)
  const [show, setShow] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const errorAlert = useRef()
  const passwordInputOne = useRef()
  const passwordInputTwo = useRef()

  const submitRegister = (e) => {
    e.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, pass)
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
    if (
      passwordInputOne.current.getAttribute('type') == 'password' ||
      passwordInputTwo.current.getAttribute('type') == 'password'
    ) {
      passwordInputOne.current.setAttribute('type', 'text')
      passwordInputTwo.current.setAttribute('type', 'text')
    } else {
      passwordInputOne.current.setAttribute('type', 'password')
      passwordInputTwo.current.setAttribute('type', 'password')
    }
  }

  const passwordComplete = () => {
    if (passwordInputTwo.current.value != passwordInputOne.current.value) {
      passwordInputTwo.current?.classList.remove('is-valid')
      passwordInputTwo.current?.classList.add('is-invalid')
    } else {
      passwordInputTwo?.current.classList.remove('is-invalid')
      passwordInputTwo?.current.classList.add('is-valid')
    }
  } // ???????????????? ????????????????????

  return (
    <>
      {alert ? (
        <Alert
          severity="error"
          sx={{ zIndex: 10 }}
          className="animate__animated animate__bounce"
          ref={errorAlert}
        >
          ????????????! ?????????????????? ???????????????????????? ???????????????????? ??????????!
        </Alert>
      ) : null}
      <div className={cn(styles.wrapper)}>
        <div className={cn(styles.container)}>
          <form className="row g-3">
            <strong>?????????????????????? ?????????????? ????????????</strong>
            <div className="col-md-12 p-0">
              <label htmlFor="validationServer01" className="form-label">
                ??????*
              </label>
              <input
                type="text"
                className="form-control"
                id="validationServer01"
                defaultValue=""
                required
                placeholder="?????????????? ?????? ..."
                onChange={textHandle}
                required
              />
              <div className="valid-feedback">?????? ????????????!</div>
              <div
                id="validationServerUsernameFeedback"
                className="invalid-feedback"
              >
                ???????????????????????? ??????
              </div>
            </div>
            <div className="col-md-12 p-0">
              <label htmlFor="validationServer03" className="form-label">
                ??????????*
              </label>
              <input
                type="text"
                className={`${cn(styles.input)} form-control`}
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
                placeholder="?????????????? email ..."
                value={email}
                onChange={(e) => {
                  emailHandle(e)
                  setEmail(e.target.value)
                }}
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                ????????????!
              </div>
              <div className="valid-feedback">?????? ????????????!</div>
            </div>
            <div className="col-md-12 p-0">
              <label htmlFor="validationServerUsername" className="form-label">
                ????????????*
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
                  ref={passwordInputOne}
                  type="password"
                  className={`${cn(styles.input)} form-control`}
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  required
                  onChange={(e) => {
                    textHandle(e)
                    passwordComplete()
                    setPass(e.target.value)
                  }}
                  placeholder="?????????????? ???????????? ..."
                  maxLength="40"
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  ????????????!
                </div>
                <div className="valid-feedback">?????? ????????????!</div>
              </div>
            </div>
            <div className="col-md-12 p-0">
              <label htmlFor="validationServerUsername" className="form-label">
                ?????????????????????? ????????????*
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
                  type="password"
                  className={`${cn(styles.input)} form-control`}
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  required
                  ref={passwordInputTwo}
                  onChange={passwordComplete}
                  placeholder="?????????????? ???????????? ..."
                  maxLength="40"
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  ???????????? ???? ??????????????????!
                </div>
                <div className="valid-feedback">?????? ????????????!</div>
              </div>
            </div>
            <button
              className={cn(styles.btn)}
              type="submit"
              onClick={submitRegister}
            >
              ????????????????????????????????????
            </button>
            <Link to="/login" style={{ textAlign: 'center' }}>
              ?????? ???????? ??????????????? ??????????????!
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}
