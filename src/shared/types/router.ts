import { EUserRole } from '@/entities/User'
import type { RouteProps } from 'react-router-dom'

export interface IAppRouteProps extends RouteProps {
  authOnly?: boolean
  roles?: EUserRole[]
}
