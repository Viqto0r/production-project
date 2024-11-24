import { memo, useCallback, useMemo, useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { EButtonTheme } from 'shared/ui/Button/ui/Button'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { Text } from 'shared/ui/Text'
import { AppLink } from 'shared/ui/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { EAppLinkTheme } from 'shared/ui/AppLink/ui/AppLink'
import { ETextTheme } from 'shared/ui/Text/ui/Text'
import { Dropdown } from 'shared/ui/Dropdown'
import { Avatar } from 'shared/ui/Avatar'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = memo(({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const handleOpenModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const dropdownItems = useMemo(
    () => [
      {
        content: t('профиль'),
        href: `${RoutePath.profile}${authData?.id}`,
      },
      { content: t('выйти'), onClick: handleLogout },
    ],
    [authData?.id, handleLogout, t]
  )

  if (authData) {
    return (
      <header className={classNames(cls.NavBar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('мое приложение')}
          theme={ETextTheme.INVERTED}
        />
        <AppLink to={RoutePath.article_create} theme={EAppLinkTheme.SECONDARY}>
          {t('создать статью')}
        </AppLink>
        <Dropdown
          className={cls.dropdown}
          items={dropdownItems}
          trigger={<Avatar size={30} src={authData.avatar} />}
          direction="bottom-left"
        />
      </header>
    )
  }

  return (
    <header className={classNames(cls.NavBar, {}, [className])}>
      <Button
        className={cls.links}
        theme={EButtonTheme.CLEAR_INVERTED}
        onClick={handleOpenModal}
      >
        {t('войти')}
      </Button>
      {isOpen && <LoginModal isOpen={isOpen} onClose={handleCloseModal} />}
    </header>
  )
})
