import { memo, useCallback, useState, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import { useTranslation } from 'react-i18next'
import { EButtonTheme } from '@/shared/ui/deprecated/Button/ui/Button'
import { LoginModal } from '@/features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Text } from '@/shared/ui/deprecated/Text'
import { AppLink } from '@/shared/ui/deprecated/AppLink'
import { getRouteArticleCreate } from '@/shared/const/router'
import { EAppLinkTheme } from '@/shared/ui/deprecated/AppLink/ui/AppLink'
import { ETextTheme } from '@/shared/ui/deprecated/Text/ui/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { NotificationButton } from '@/features/NotificationButton'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features'
import { Button } from '@/shared/ui/redesigned/Button'

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

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.NavBarRedesigned,
    off: () => cls.NavBar,
  })

  if (authData) {
    return (
      <header className={classNames(mainClass, {}, [className])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <HStack gap="16" className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          }
          off={
            <>
              <Text
                className={cls.appName}
                title={t('мое приложение')}
                theme={ETextTheme.INVERTED}
              />
              <AppLink
                to={getRouteArticleCreate()}
                theme={EAppLinkTheme.SECONDARY}
              >
                {t('создать статью')}
              </AppLink>
              <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
              </HStack>
            </>
          }
        />
      </header>
    )
  }

  return (
    <header className={classNames(mainClass, {}, [className])}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button
            className={cls.links}
            variant="clear"
            onClick={handleOpenModal}
          >
            {t('войти')}
          </Button>
        }
        off={
          <ButtonDeprecated
            className={cls.links}
            theme={EButtonTheme.CLEAR_INVERTED}
            onClick={handleOpenModal}
          >
            {t('войти')}
          </ButtonDeprecated>
        }
      />

      {isOpenAuthModal && (
        <LoginModal isOpen={isOpenAuthModal} onClose={handleCloseModal} />
      )}
    </header>
  )
})
