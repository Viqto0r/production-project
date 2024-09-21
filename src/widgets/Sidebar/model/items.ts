import MainIcon from 'shared/assets/icons/Main.svg'
import AboutIcon from 'shared/assets/icons/About.svg'
import ProfileIcon from 'shared/assets/icons/Profile.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { type ISidebarItemProps } from '../ui/SidebarItem/SidebarItem'

export const sidebarItemList: Array<Omit<ISidebarItemProps, 'collapsed'>> = [
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
  {
    Icon: ProfileIcon,
    path: RoutePath.profile,
    text: 'профиль',
    authOnly: true,
  },
]
