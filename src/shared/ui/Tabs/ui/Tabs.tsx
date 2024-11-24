import { memo, type ReactNode, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { Card, ECardTheme } from '../../Card/Card'

export interface ITabItem {
  value: string
  content: ReactNode
}

interface ITabsProps {
  className?: string
  tabs: ITabItem[]
  value: string
  onTabClick: (activeTab: string) => void
}

export const Tabs: FC<ITabsProps> = memo((props) => {
  const { className, tabs, value, onTabClick } = props

  const handleClick = useCallback(
    (tab: ITabItem) => () => {
      onTabClick(tab.value)
    },
    [onTabClick]
  )

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          theme={tab.value === value ? ECardTheme.NORMAL : ECardTheme.OUTLINED}
          onClick={handleClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})
