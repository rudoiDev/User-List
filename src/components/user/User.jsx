// MUI
import CircularProgress from '@mui/material/CircularProgress'
import MailIcon from '@mui/icons-material/Mail'
import LanguageIcon from '@mui/icons-material/Language'

// imports
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './user.module.scss'
import cn from 'classnames'
import axios from 'axios'

// components
import Footer from '../footer/Footer'
import UserHeader from './userHeader/UserHeader'

export default () => {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setTimeout(() => {
      try {
        axios.get(`https://reqres.in/api/users/${id}`).then((json) => {
          setPost(json.data)
        })
      } catch (e) {
        console.error(e)
      }
    }, 1000)
  }, [])

  return (
    <>
      <UserHeader support={post?.support} data={post?.data} />
      {!!post ? (
        <main className={cn(styles.main)}>
          <div className={cn(styles.userInfo)}>
            <div className={cn(styles.userDescription)}>
              Клиенты видят в нем эксперта по вопросам разработки комплексных
              решений финансовых продуктов, включая такие аспекты, как
              организационная структура, процессы, аналитика и ИТ-компоненты. Он
              помогает клиентам лучше понимать структуру рисков их бизнеса,
              улучшать процессы за счет применения новейших технологий и
              увеличивать продажи, используя самые современные аналитические
              инструменты. <br /> <br />
              В работе с клиентами недостаточно просто решить конкретную
              проблему или помочь справиться с трудностями. Не менее важно
              уделять внимание обмену знаниями: "Один из самых позитивных
              моментов — это осознание того, что ты помог клиенту перейти на
              совершенно новый уровень компетентности, уверенность в том, что
              после окончания проекта у клиента есть все необходимое, чтобы
              дальше развиваться самостоятельно". <br /> <br />
              Помимо разнообразных проектов для клиентов финансового сектора,
              Сорин ведет активную предпринимательскую деятельность. Он является
              совладельцем сети клиник эстетической медицины в Швейцарии,
              предлагающей инновационный подход к красоте, а также инвестором
              других бизнес-проектов. <br /> <br />
            </div>
          </div>
          <div className={cn(styles.userAddress)}>
            <div className={cn(styles.userSite)}>
              <LanguageIcon
                sx={{ fontSize: 30 }}
                className={cn(styles.userIcon)}
              />
              {post.support.url}
            </div>
            <div className={cn(styles.userEmail)}>
              <MailIcon sx={{ fontSize: 30 }} className={cn(styles.userIcon)} />
              {post.data.email}
            </div>
          </div>
        </main>
      ) : (
        <main className={cn(styles.main)}>
          <div className={cn(styles.spinner)}>
            <CircularProgress sx={{ margin: '25px' }} color="secondary" />
          </div>
        </main>
      )}
      <Footer />
    </>
  )
}
