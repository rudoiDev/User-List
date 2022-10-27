// MUI
import CircularProgress from '@mui/material/CircularProgress'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'

// imports
import styles from './main.module.scss'
import cn from 'classnames'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '@/redux/slices/userSlice'
import { valueLike } from '@/redux/slices/userSlice'
import Person from './person/person'

// components
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default () => {
  const [post, setPost] = useState(null)
  const [postCount, setCountPost] = useState(1)
  const [progress, setProgress] = useState(true)

  const dispatch = useDispatch()
  const likeData = useSelector(valueLike)

  useEffect(() => {
    setTimeout(() => {
      try {
        axios
          .get(`https://reqres.in/api/users?/page=${postCount}`)
          .then((json) => {
            const dataItem = json.data.data
            setPost(dataItem)
            setCountPost((prevState) => prevState + 1)
            if (!localStorage.getItem('users')) {
              const base = dataItem.reduce((accum, item) => {
                accum[item.id] = false
                return accum
              }, {})
              dispatch(getData(base))
            } else {
              const storageData = JSON.parse(localStorage.getItem('users'))
              dispatch(getData(storageData))
            }
            setTimeout(() => {
              removeAnimation()
            }, 1000)
          })
      } catch (e) {
        console.error(e)
      }
    }, 500)
  }, [])

  const removeAnimation = () => {
    const elems = document.querySelectorAll('.animate__animated')
    elems.forEach((el) => {
      el.classList.remove(
        'animate__animated',
        'animate__bounce',
        'animate__jackInTheBox'
      )
    })
  }

  const addContent = (e) => {
    setProgress(false)
    setTimeout(() => {
      try {
        axios
          .get(`https://reqres.in/api/users?page=${postCount}`)
          .then((json) => {
            const dataItem = json.data.data
            setPost((prevValue) => [...prevValue, ...json.data.data])
            setCountPost((prevState) => prevState + 1)
            setProgress(true)
            const base = dataItem.reduce((accum, item) => {
              accum[item.id] = false
              return accum
            }, {})
            const storageData = JSON.parse(localStorage.getItem('users'))
            dispatch(getData(storageData))
            dispatch(getData({ ...base, ...likeData }))
            setTimeout(() => {
              removeAnimation()
            }, 1000)
          })
      } catch (e) {
        console.error(e)
      }
    }, 1000)
  }

  return (
    <>
      <Header />
      <div className={cn(styles.container)}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {!!post ? (
              post.map((el) => {
                return <Person el={el} likeData={likeData} key={el.id} />
              })
            ) : (
              <div className={cn(styles.spinner)}>
                <CircularProgress color="secondary" />
              </div>
            )}
          </Grid>
        </Box>
        {postCount != 3 ? (
          <>
            {!!post ? (
              <div className={cn(styles.buttonAdd)}>
                {progress ? (
                  <Button
                    variant="outlined"
                    onClick={addContent}
                    color="secondary"
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{
                      margin: '25px',
                      fontSize: '20px',
                      padding: '15px 30px',
                    }}
                  >
                    Показать еще
                  </Button>
                ) : (
                  <CircularProgress sx={{ margin: '25px' }} color="secondary" />
                )}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
      <Footer />
    </>
  )
}
