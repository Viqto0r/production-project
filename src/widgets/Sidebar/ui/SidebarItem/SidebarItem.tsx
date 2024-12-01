import { memo, type FC } from 'react'
import { AppLink } from '@/shared/ui/AppLink'
import { EAppLinkTheme } from '@/shared/ui/AppLink/ui/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

export interface ISidebarItemProps {
  Icon: FC<React.SVGAttributes<SVGElement>>
  text: string
  path: string
  collapsed: boolean
  authOnly?: boolean
}

export const SidebarItem: FC<ISidebarItemProps> = memo(
  ({ Icon, text, path, collapsed }) => {
    const { t } = useTranslation()

    return (
      <AppLink
        className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
        theme={EAppLinkTheme.SECONDARY}
        to={path}
      >
        <Icon className={cls.icon} />
        <span className={cls.link}>{t(text)}</span>
      </AppLink>
    )
  }
)
