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
