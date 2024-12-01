import { memo, useCallback, useMemo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Popups'
import { Avatar } from 'shared/ui/Avatar'

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

  const dropdownItems = useMemo(
    () => [
      ...(isAdminPanelAvailable
        ? [
            {
              content: t('админка'),
              href: `${RoutePath.admin_panel}`,
            },
          ]
        : []),
      {
        content: t('профиль'),
        href: `${RoutePath.profile}${authData?.id}`,
      },
      { content: t('выйти'), onClick: handleLogout },
    ],
    [authData?.id, handleLogout, t, isAdminPanelAvailable]
  )

  if (!authData) {
    return null
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      items={dropdownItems}
      trigger={<Avatar size={30} src={authData.avatar} />}
      direction="bottom-left"
    />
  )
})
