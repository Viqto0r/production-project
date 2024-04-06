import { type FC, Suspense } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import './styles/index.scss'

export const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='page-content'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
