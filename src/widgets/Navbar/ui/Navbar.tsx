import { memo, useCallback, useState, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { EButtonTheme } from '@/shared/ui/Button/ui/Button'
import { LoginModal } from '@/features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Text } from '@/shared/ui/Text'
import { AppLink } from '@/shared/ui/AppLink'
import { RoutePath } from '@/shared/const/router'
import { EAppLinkTheme } from '@/shared/ui/AppLink/ui/AppLink'
import { ETextTheme } from '@/shared/ui/Text/ui/Text'
import { HStack } from '@/shared/ui/Stack'
import { NotificationButton } from '@/features/NotificationButton'
import { AvatarDropdown } from '@/features/AvatarDropdown'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = memo(({ className }) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)

  const handleOpenModal = useCallback(() => {
    setIsOpenAuthModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsOpenAuthModal(false)
  }, [])

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
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
      {isOpenAuthModal && (
        <LoginModal isOpen={isOpenAuthModal} onClose={handleCloseModal} />
      )}
    </header>
  )
})
