import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/Profile.svg'
import AboutIcon from '@/shared/assets/icons/About.svg'
import MainIcon from '@/shared/assets/icons/Main.svg'
import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { type TSidebarItems } from '../types/sidebar'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: TSidebarItems = [
    {
      Icon: MainIcon,
      path: RoutePath.main,
      text: 'главная страница',
    },
    {
      Icon: AboutIcon,
      path: RoutePath.about,
      text: 'о сайте',
    },
  ]

  if (userData?.id) {
    sidebarItemList.push(
      {
        Icon: ProfileIcon,
        path: `${RoutePath.profile}${userData?.id}`,
        text: 'профиль',
        authOnly: true,
      },
      {
        Icon: ArticleIcon,
        path: RoutePath.articles,
        text: 'статьи',
        authOnly: true,
      }
    )
  }

  return sidebarItemList
})
