// MUI
import Grid from '@mui/material/Unstable_Grid2'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

// imports
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getLike } from '@/redux/slices/userSlice'
import cn from 'classnames'
import styles from './person.module.scss'

export default ({ el, likeData }) => {
  const dispatch = useDispatch()
  const showLike = (e) => {
    const userID = e.currentTarget.dataset.id
    dispatch(getLike(userID))
  }
  return (
    <Grid
      xs={12}
      sm={4}
      md={4}
      key={el.id}
      className={cn(styles.containerPosts)}
    >
      <div
        className={
          'animate__animated animate__bounce animate__jackInTheBox ' +
          cn(styles.post)
        }
        key={el.id}
      >
        <Link to={`/${el.id}`} className={cn(styles.postLink)}>
          <div className={cn(styles.postAvatar)}>
            <img src={el.avatar} alt={el.first_name + ' ' + el.last_name} />
          </div>
          <div className={cn(styles.postName)}>
            {el.first_name + ' ' + el.last_name}
          </div>
        </Link>
        <div className={cn(styles.postIcon)} onClick={showLike} data-id={el.id}>
          {likeData[el.id] ? (
            <FavoriteIcon sx={{ fontSize: 30 }} />
          ) : (
            <FavoriteBorderIcon sx={{ fontSize: 30 }} data-id={el.id} />
          )}
        </div>
      </div>
    </Grid>
  )
}
