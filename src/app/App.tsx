import { type FC, Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { useSelector } from 'react-redux'
import { getUserIsInit, initAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { PageLoader } from '@/widgets/PageLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout'
import { useAppToolbar } from './lib/useAppToolbar'

export const App: FC = () => {
  const dispatch = useAppDispatch()
  const toolbar = useAppToolbar()
  const isUserInit = useSelector(getUserIsInit)

  useEffect(() => {
    if (!isUserInit) {
      dispatch(initAuthData())
    }
  }, [dispatch, isUserInit])

  if (!isUserInit) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div id="app" className="app_redesigned">
            <AppLoaderLayout />
          </div>
        }
        off={<PageLoader />}
      />
    )
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div id="app" className="app_redesigned">
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
              toolbar={toolbar}
            />
          </Suspense>
        </div>
      }
      off={
        <div id="app" className="app">
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
