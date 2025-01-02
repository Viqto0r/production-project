export enum EAppRoutes {
  MAIN = 'main',
  SETTINGS = 'settings',
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

export const getRouteMain = () => '/'
export const getRouteSettings = () => '/settings'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteAdminPanel = () => '/admin'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/new'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteForbidden = () => '/forbidden'
export const getRouteNotFound = () => '*'

export const AppRouteByPathPattern: Record<string, EAppRoutes> = {
  [getRouteMain()]: EAppRoutes.MAIN,
  [getRouteSettings()]: EAppRoutes.SETTINGS,
  [getRouteAbout()]: EAppRoutes.ABOUT,
  [getRouteProfile(':id')]: EAppRoutes.PROFILE,
  [getRouteArticles()]: EAppRoutes.ARTICLES,
  [getRouteAdminPanel()]: EAppRoutes.ADMIN_PANEL,
  [getRouteArticleDetails(':id')]: EAppRoutes.ARTICLE_DETAILS,
  [getRouteArticleCreate()]: EAppRoutes.ARTICLE_CREATE,
  [getRouteArticleEdit(':id')]: EAppRoutes.ARTICLE_EDIT,
  [getRouteForbidden()]: EAppRoutes.FORBIDDEN,
}
