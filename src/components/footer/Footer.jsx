// imports
import styles from './footer.module.scss'
import cn from 'classnames'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default () => {
  const [user, setUser] = useState(!!JSON.parse(localStorage.getItem('person')))
  return (
    <>
      {!user ? <Navigate replace to="/login" /> : null}
      <div className={cn(styles.container)}>
        <footer className={cn(styles.footer)}>
          <h2>All rights reserved &copy;</h2>
        </footer>
      </div>
    </>
  )
}
