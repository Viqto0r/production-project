import { memo, type ReactNode, useCallback, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { Card } from '../../Card'
import { Flex, TFlexDirection } from '../../Stack/ui/Flex/Flex'

export interface ITabItem {
  value: string
  content: ReactNode
}

interface ITabsProps {
  className?: string
  tabs: ITabItem[]
  value: string
  onTabClick: (activeTab: string) => void
  direction?: TFlexDirection
}

export const Tabs: FC<ITabsProps> = memo((props) => {
  const { className, tabs, value, onTabClick, direction = 'row' } = props

  const handleClick = useCallback(
    (tab: ITabItem) => () => {
      onTabClick(tab.value)
    },
    [onTabClick]
  )

  return (
    <Flex
      className={classNames(cls.Tabs, {}, [className])}
      data-testid="ArticlesPageFilters.ArticleTypeTabs"
      direction={direction}
      gap="8"
      align="start"
    >
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          variant={tab.value === value ? 'light' : 'normal'}
          onClick={handleClick(tab)}
          border="round"
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          data-testid={`ArticleTypeTab.${tab.content}`}
        >
          {tab.content}
        </Card>
      ))}
    </Flex>
  )
})
