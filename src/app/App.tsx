import { type FC, Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { useSelector } from 'react-redux'
import { getUserIsInit, initAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { PageLoader } from '@/widgets/PageLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layouts/MainLayout'

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div className={classNames('app_redesigned', {}, [])}>
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
              toolbar={<div>TOOLBAR</div>}
            />
          </Suspense>
        </div>
      }
      off={
        <div className={classNames('app', {}, [])}>
          <Suspense fallback="">
            <Navbar />
            <div className="page-content">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
    />
  )
}
