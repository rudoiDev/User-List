// MUI
import LinearProgress from '@mui/material/LinearProgress'
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import LogoutIcon from '@mui/icons-material/Logout'

// imports
import { useNavigate } from 'react-router-dom'
import styles from './userHeader.module.scss'
import cn from 'classnames'
import { useState, useEffect } from 'react'

export default ({ support, data }) => {
  const [media, setMedia] = useState(window.innerWidth)
  const navigate = useNavigate()
  const exitBack = () => {
    localStorage.clear()
    navigate('/login')
  }

	window.addEventListener("resize", (e) => {
		setMedia(window.innerWidth)
	}, {
		once: true 
	});

  return (
    <>
      {!!support && !!data ? (
        <div className={cn(styles.navWrapper)}>
          <div className={cn(styles.container)}>
            <nav className={cn(styles.navContainer)}>
              {media >= 600 ? (
                <>
                  <div className={cn(styles.buttonExit)}>
                    <Button variant="outlined" onClick={() => navigate(-1)}>
                      Назад
                    </Button>
                  </div>
                  <div className={cn(styles.buttonExit)}>
                    <Button variant="outlined" onClick={exitBack}>
                      Выход
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className={cn(styles.btnBack)}>
                    <ArrowBackIosIcon
                      sx={{ fontSize: 40 }}
                      onClick={() => navigate(-1)}
                    />
                  </div>
                  <div className={cn(styles.btnBack)}>
                    <LogoutIcon sx={{ fontSize: 40 }} onClick={exitBack} />
                  </div>
                </>
              )}
            </nav>
            <header className={cn(styles.header)}>
              <div className={cn(styles.headerImg)}>
                <img src={data.avatar} alt="#" />
              </div>
              <div className={cn(styles.headerInfo)}>
                <h1 className={cn(styles.h1)}>
                  {data.first_name + ' ' + data.last_name}
                </h1>
                <p className={cn(styles.p1)}>Партнер</p>
              </div>
            </header>
          </div>
        </div>
      ) : (
        <LinearProgress color="secondary" />
      )}
    </>
  )
}
