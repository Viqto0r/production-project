import { memo, useCallback, useMemo, type FC } from 'react'
import {
  type ITabItem,
  Tabs as TabsDeprecated,
} from '@/shared/ui/deprecated/Tabs/ui/Tabs'
import { useTranslation } from 'react-i18next'
import { EArticleType } from '@/entities/Article'
import { ToggleFeatures } from '@/shared/lib/features'
import { Tabs } from '@/shared/ui/redesigned/Tabs/ui/Tabs'

interface IArticleTypeTabsProps {
  className?: string
  onChangeTab: (activeTab: EArticleType) => void
  value: EArticleType
}

export const ArticleTypeTabs: FC<IArticleTypeTabsProps> = memo((props) => {
  const { className, onChangeTab, value } = props
  const { t } = useTranslation()

  const tabs = useMemo<ITabItem[]>(
    () =>
      Object.keys(EArticleType).map((type) => ({
        value: type,
        content: t(type),
      })),
    [t]
  )

  // коллбек, чтобы скастовать тип
  const handleTabClick = useCallback(
    (activeTab: string) => {
      onChangeTab(activeTab as EArticleType)
    },
    [onChangeTab]
  )

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Tabs
          className={className}
          tabs={tabs}
          value={value}
          onTabClick={handleTabClick}
          direction="column"
        />
      }
      off={
        <TabsDeprecated
          className={className}
          tabs={tabs}
          value={value}
          onTabClick={handleTabClick}
        />
      }
    />
  )
})
