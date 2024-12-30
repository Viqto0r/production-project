import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticlesPageFilters.module.scss'

import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters'

interface IArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters: FC<IArticlesPageFiltersProps> = memo(
  (props) => {
    const { className } = props

    const { t } = useTranslation()
    const {
      order,
      sort,
      view,
      search,
      type,
      onChangeSort,
      onChangeTab,
      onChangeView,
      onChangeOrder,
      onChangeSearch,
    } = useArticlesFilters()

    return (
      <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
          />
          <ArticleViewSelector view={view} onViewClick={onChangeView} />
        </div>
        <Card>
          <Input
            placeholder={t('поиск')}
            value={search}
            onChange={onChangeSearch}
            data-testId="ArticlesPageFilters.ArticlesSearch"
          />
        </Card>
        <ArticleTypeTabs onChangeTab={onChangeTab} value={type} />
      </div>
    )
  }
)
