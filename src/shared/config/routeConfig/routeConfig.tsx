import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { type RouteProps } from 'react-router-dom'

export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: '/',
  [EAppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<EAppRoutes, RouteProps> = {
  [EAppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
  [EAppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
}
