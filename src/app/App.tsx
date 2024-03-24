import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { classNames } from 'shared/lib/classNames'
import { Navbar } from 'widgets/Navbar'
import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { useTranslation } from 'react-i18next'
import { Suspense } from 'react'

export const App = () => {
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
