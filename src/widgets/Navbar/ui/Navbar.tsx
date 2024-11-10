import { memo, useCallback, useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { EButtonTheme } from 'shared/ui/Button/ui/Button'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

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

  if (authData) {
    return (
      <header className={classNames(cls.NavBar, {}, [className])}>
        <div className={cls.links}>
          <Button theme={EButtonTheme.CLEAR_INVERTED} onClick={handleLogout}>
            {t('выйти')}
          </Button>
        </div>
      </header>
    )
  }

  return (
    <header className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={EButtonTheme.CLEAR_INVERTED} onClick={handleOpenModal}>
          {t('войти')}
        </Button>
      </div>
      {isOpen && <LoginModal isOpen={isOpen} onClose={handleCloseModal} />}
    </header>
  )
})
