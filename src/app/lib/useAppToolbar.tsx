import { EAppRoutes } from '@/shared/const/router'
import { useRouteChange } from '@/shared/lib/router/useRouteChange'
import { ScrollToolbar } from '@/widgets/ScrollToolbar'
import { ReactElement } from 'react'

export const useAppToolbar = () => {
  const appRoute = useRouteChange()

  const toolbarByAppRoute: OptionalRecord<EAppRoutes, ReactElement> = {
    [EAppRoutes.ARTICLES]: <ScrollToolbar />,
    [EAppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
  }

  return toolbarByAppRoute[appRoute]
}
