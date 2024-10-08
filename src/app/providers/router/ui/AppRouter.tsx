import { getUserAuthData } from 'entities/User'
import { memo, Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData)
  const routes = useMemo(
    () =>
      Object.values(routeConfig).filter((route) => !route.authOnly || isAuth),
    [isAuth]
  )

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
})
