import { ChangeEvent, memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticlesFilters.module.scss'
import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui/redesigned/Input'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EArticleSortField, EArticleType } from '@/entities/Article'
import { ESortOrderType } from '@/shared/types/sort'
import SearchIcon from '@/shared/assets/icons/search.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface IArticlesFiltersProps {
  className?: string
  type: EArticleType
  sort: EArticleSortField
  order: ESortOrderType
  search: string
  onChangeTab: (activeTab: EArticleType) => void
  onChangeSort: (value: string) => void
  onChangeOrder: (value: string) => void
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ArticlesFilters: FC<IArticlesFiltersProps> = memo((props) => {
  const {
    className,
    sort,
    order,
    onChangeSort,
    onChangeTab,
    onChangeSearch,
    onChangeOrder,
    type,
    search,
  } = props

  const { t } = useTranslation()

  return (
    <Card
      className={classNames(cls.ArticlesFilters, {}, [className])}
      padding="24"
    >
      <VStack gap="32">
        <Input
          placeholder={t('поиск')}
          value={search}
          onChange={onChangeSearch}
          data-testId="ArticlesPageFilters.ArticlesSearch"
          addonLeft={<Icon Svg={SearchIcon} />}
          size="s"
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleTypeTabs onChangeTab={onChangeTab} value={type} />
      </VStack>
    </Card>
  )
})
