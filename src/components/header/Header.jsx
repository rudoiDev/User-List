// MUI
import Button from '@mui/material/Button'

// imports
import styles from './header.module.scss'
import cn from 'classnames'
import { useNavigate } from 'react-router-dom'

export default () => {
  const navigate = useNavigate()
  const exitBack = () => {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <>
      <div className={cn(styles.nav_wrapper)}>
        <div className={cn(styles.container)}>
          <header>
            <nav>
              <div className={cn(styles.buttonExit)}>
                <Button variant="outlined" onClick={exitBack}>
                  Выход
                </Button>
              </div>
            </nav>
            <h1 className={cn(styles.h1)}>Наша команда</h1>
            <p className={cn(styles.p1)}>
              Это опытные специалисты, хорошо разбирающиеся во всех задачах,
              которые ложатся
              <br /> на их плечи, и умеющие находить выход из любых, даже самых
              сложных ситуаций.
            </p>
          </header>
        </div>
      </div>
    </>
  )
}
