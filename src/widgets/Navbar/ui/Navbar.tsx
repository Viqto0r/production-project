import { useCallback, useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { EButtonTheme } from 'shared/ui/Button/ui/Button'
import { Modal } from 'shared/ui/Modal'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const handleOpenModal = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={EButtonTheme.CLEAR_INVERTED} onClick={handleOpenModal}>
          {t('войти')}
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={handleOpenModal}>
        {/* eslint-disable */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam
        repudiandae eum laboriosam corrupti aut maiores beatae dicta blanditiis
        a, sunt sint sapiente doloremque, deserunt neque? Doloribus illum nobis
        quasi.
        {/* eslint-enable */}
      </Modal>
    </div>
  )
}
