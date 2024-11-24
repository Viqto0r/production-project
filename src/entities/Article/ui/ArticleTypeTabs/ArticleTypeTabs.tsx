import { memo, useCallback, useMemo, type FC } from 'react'
import { type ITabItem, Tabs } from 'shared/ui/Tabs/ui/Tabs'
import { EArticleType } from '../../model/types/article'
import { useTranslation } from 'react-i18next'

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
    <Tabs
      className={className}
      tabs={tabs}
      value={value}
      onTabClick={handleTabClick}
    />
  )
})
