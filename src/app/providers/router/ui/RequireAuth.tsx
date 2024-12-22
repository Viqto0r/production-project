import { type EUserRole, getUserAuthData, getUserRoles } from '@/entities/User'
import { useMemo, type FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getRouteForbidden, getRouteMain } from '@/shared/const/router'

interface IRequireAuthProps {
  children: JSX.Element
  roles?: EUserRole[]
}

export const RequireAuth: FC<IRequireAuthProps> = ({ children, roles }) => {
  const isAuth = useSelector(getUserAuthData)
  const userRoles = useSelector(getUserRoles)
  const location = useLocation()

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some((requiredRole) => userRoles?.includes(requiredRole))
  }, [roles, userRoles])

  if (!isAuth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
    )
  }

  return children
}
