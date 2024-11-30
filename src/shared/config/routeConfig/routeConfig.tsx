import { EUserRole } from 'entities/User'
import { AboutPage } from 'pages/AboutPage'
import { AdminPanelPage } from 'pages/AdminPanelPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import ForbiddenPage from 'pages/ForbiddenPage/ui/ForbiddenPage/ForbiddenPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'

export interface IAppRouteProps extends RouteProps {
  authOnly?: boolean
  roles?: EUserRole[]
}

export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: '/',
  [EAppRoutes.ABOUT]: '/about',
  [EAppRoutes.PROFILE]: '/profile/', // + :id
  [EAppRoutes.ARTICLES]: '/articles',
  [EAppRoutes.ADMIN_PANEL]: '/admin',
  [EAppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [EAppRoutes.ARTICLE_CREATE]: '/articles/new',
  [EAppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [EAppRoutes.FORBIDDEN]: '/forbidden',
  // last
  [EAppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<EAppRoutes, IAppRouteProps> = {
  [EAppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
  [EAppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
  [EAppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [EAppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [EAppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [EAppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [EAppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [EAppRoutes.ADMIN_PANEL]: {
    path: RoutePath.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [EUserRole.ADMIN, EUserRole.MANAGER],
  },
  [EAppRoutes.FORBIDDEN]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />,
  },
  // last
  [EAppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
