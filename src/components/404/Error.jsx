// MUI
import Button from '@mui/material/Button'
import ReplyIcon from '@mui/icons-material/Reply'

// imports
import { useNavigate } from 'react-router-dom'
import styles from './error.module.scss'
import cn from 'classnames'

export default () => {
  const navigate = useNavigate()
  const goBack = () => navigate('/')
  return (
    <>
      <h1 className={cn(styles.h1)}>Упс, что-то пошло не так!</h1>
      <div className={cn(styles.btn_back)}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ borderRadius: 100, padding: 2, fontSize: 16 }}
          startIcon={<ReplyIcon />}
          onClick={goBack}
        >
          Вернуться на главную
        </Button>
      </div>
    </>
  )
}
