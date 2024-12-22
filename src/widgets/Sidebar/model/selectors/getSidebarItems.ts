import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/Profile.svg'
import AboutIcon from '@/shared/assets/icons/About.svg'
import MainIcon from '@/shared/assets/icons/Main.svg'
import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router'
import { type TSidebarItems } from '../types/sidebar'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: TSidebarItems = [
    {
      Icon: MainIcon,
      path: getRouteMain(),
      text: 'главная страница',
    },
    {
      Icon: AboutIcon,
      path: getRouteAbout(),
      text: 'о сайте',
    },
  ]

  if (userData?.id) {
    sidebarItemList.push(
      {
        Icon: ProfileIcon,
        path: getRouteProfile(userData.id),
        text: 'профиль',
        authOnly: true,
      },
      {
        Icon: ArticleIcon,
        path: getRouteArticles(),
        text: 'статьи',
        authOnly: true,
      }
    )
  }

  return sidebarItemList
})
