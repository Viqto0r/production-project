import { memo, type FC } from 'react'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { EAppLinkTheme } from '@/shared/ui/deprecated/AppLink/ui/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'

export interface ISidebarItemProps {
  collapsed: boolean
  item: {
    Icon: FC<React.SVGAttributes<SVGElement>>
    text: string
    path: string
  }
}

export const SidebarItem: FC<ISidebarItemProps> = memo(
  ({ item, collapsed }) => {
    const { t } = useTranslation()

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <AppLink
            className={classNames(
              cls.itemRedesigned,
              { [cls.collapsed]: collapsed },
              []
            )}
            activeClassName={cls.active}
            to={item.path}
          >
            <Icon className={cls.icon} Svg={item.Icon} />
            <span className={cls.link}>{t(item.text)}</span>
          </AppLink>
        }
        off={
          <AppLinkDeprecated
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
            theme={EAppLinkTheme.SECONDARY}
            to={item.path}
          >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
          </AppLinkDeprecated>
        }
      />
    )
  }
)
