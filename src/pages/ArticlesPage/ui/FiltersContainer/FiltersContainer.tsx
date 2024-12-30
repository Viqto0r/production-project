import { memo, type FC } from 'react'
import { ArticlesFilters } from '@/widgets/ArticlesFIlters'
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters'

interface IFiltersContainerProps {
  className?: string
}

export const FiltersContainer: FC<IFiltersContainerProps> = memo((props) => {
  const { className } = props
  const {
    sort,
    type,
    order,
    search,
    onChangeTab,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
  } = useArticlesFilters()

  return (
    <ArticlesFilters
      className={className}
      type={type}
      sort={sort}
      order={order}
      search={search}
      onChangeTab={onChangeTab}
      onChangeSort={onChangeSort}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
    />
  )
})
