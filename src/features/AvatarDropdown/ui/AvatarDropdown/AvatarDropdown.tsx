import { memo, useCallback, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User'
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router'
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { ToggleFeatures } from '@/shared/lib/features'
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import { Avatar } from '@/shared/ui/redesigned/Avatar'

interface IAvatarDropdownProps {
  className?: string
}

export const AvatarDropdown: FC<IAvatarDropdownProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const authData = useSelector(getUserAuthData)

  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const isAdminPanelAvailable = isAdmin || isManager

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return null
  }
  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('админка'),
            href: getRouteAdminPanel(),
          },
        ]
      : []),
    {
      content: t('профиль'),
      href: getRouteProfile(authData.id),
    },
    { content: t('выйти'), onClick: handleLogout },
  ]

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          className={classNames('', {}, [className])}
          items={items}
          trigger={<Avatar size={40} src={authData.avatar} />}
          direction="bottom-left"
        />
      }
      off={
        <DropdownDeprecated
          className={classNames('', {}, [className])}
          items={items}
          trigger={
            <AvatarDeprecated
              size={30}
              src={authData.avatar}
              fallbackInverted
            />
          }
          direction="bottom-left"
        />
      }
    />
  )
})
