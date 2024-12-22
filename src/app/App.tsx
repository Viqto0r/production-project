import { type FC, Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserIsInit, userActions } from '@/entities/User'

export const App: FC = () => {
  const dispatch = useDispatch()

  const isUserInit = useSelector(getUserIsInit)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-content">
          <Sidebar />
          {isUserInit && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}
