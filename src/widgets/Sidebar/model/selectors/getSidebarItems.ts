import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/Profile.svg'
import AboutIconDeprecated from '@/shared/assets/icons/About.svg'
import MainIconDeprecated from '@/shared/assets/icons/Main.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'
import AboutIcon from '@/shared/assets/icons/Info.svg'
import MainIcon from '@/shared/assets/icons/home.svg'
import { getUserAuthData } from '@/entities/User'
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router'
import { type TSidebarItems } from '../types/sidebar'
import { toggleFeatures } from '@/shared/lib/features'
import { useSelector } from 'react-redux'

export const useSidebarItems = () => {
  const userData = useSelector(getUserAuthData)

  const sidebarItemList: TSidebarItems = [
    {
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => MainIcon,
        off: () => MainIconDeprecated,
      }),
      path: getRouteMain(),
      text: 'главная страница',
    },
    {
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => AboutIcon,
        off: () => AboutIconDeprecated,
      }),
      path: getRouteAbout(),
      text: 'о сайте',
    },
  ]

  if (userData?.id) {
    sidebarItemList.push(
      {
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ProfileIcon,
          off: () => ProfileIconDeprecated,
        }),
        path: getRouteProfile(userData.id),
        text: 'профиль',
      },
      {
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          on: () => ArticleIcon,
          off: () => ArticleIconDeprecated,
        }),
        path: getRouteArticles(),
        text: 'статьи',
      }
    )
  }

  return sidebarItemList
}
