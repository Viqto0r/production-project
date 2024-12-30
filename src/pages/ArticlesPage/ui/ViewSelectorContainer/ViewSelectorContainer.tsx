import { memo, type FC } from 'react'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters'

interface IViewSelectorContainerProps {
  className?: string
}

export const ViewSelectorContainer: FC<IViewSelectorContainerProps> = memo(
  (props) => {
    const { className } = props
    const { view, onChangeView } = useArticlesFilters()

    return (
      <ArticleViewSelector
        className={className}
        view={view}
        onViewClick={onChangeView}
      />
    )
  }
)
