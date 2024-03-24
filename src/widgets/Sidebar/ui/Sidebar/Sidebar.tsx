import { classNames } from 'shared/lib/classNames'
import cls from './Sidebar.module.scss'
import { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

interface ISidebarProps {
  className?: string
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapse = () => {
    setCollapsed((collapsed) => !collapsed)
  }

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggleCollapse}>{t('переключить')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}
