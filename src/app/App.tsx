import { type FC, Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { useSelector } from 'react-redux'
import { getUserIsInit, initAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { PageLoader } from '@/widgets/PageLoader'

export const App: FC = () => {
  const dispatch = useAppDispatch()

  const isUserInit = useSelector(getUserIsInit)

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  if (!isUserInit) {
    return <PageLoader />
  }

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
