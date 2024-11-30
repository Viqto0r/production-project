import { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { EArticleView, type IArticle } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { ETextSize } from 'shared/ui/Text/ui/Text'
import { List, type ListRowProps, WindowScroller } from 'react-virtualized'
import { PAGE_ID } from 'widgets/Page/ui/Page'

interface IArticleListProps {
  className?: string
  articles: IArticle[]
  isLoading?: boolean
  view?: EArticleView
  target?: HTMLAnchorElement['target']
  virtualized?: boolean
}

const renderSkeleton = (view: EArticleView) => {
  const length = view === EArticleView.SMALL ? 9 : 3

  return Array.from({ length }).map((_, idx) => (
    <ArticleListItemSkeleton key={idx} view={view} />
  ))
}

const getItemsPerRow = (isBig: boolean) => {
  if (isBig) {
    return 1
  }

  const pageElement = document.getElementById(PAGE_ID)

  if (!pageElement) {
    return 1
  }

  const paddings = 35
  const cardWidth = 260

  return Math.floor((pageElement.clientWidth - paddings) / cardWidth)
}

export const ArticleList: FC<IArticleListProps> = memo((props) => {
  const {
    className,
    articles,
    isLoading,
    view = EArticleView.SMALL,
    target,
    virtualized = true,
  } = props
  const { t } = useTranslation()
  const isBig = view === EArticleView.BIG

  const itemsPerRow = getItemsPerRow(isBig)
  const rowCount = Math.ceil(articles.length / itemsPerRow)

  const rowRenderer = useCallback(
    ({ index, key }: ListRowProps) => {
      const items = []
      const fromIndex = index * itemsPerRow
      const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

      for (let i = fromIndex; i < toIndex; i++) {
        items.push(
          <ArticleListItem
            className={cls.card}
            article={articles[i]}
            view={view}
            target={target}
            key={articles[i].id}
          />
        )
      }

      return (
        <div key={key} className={cls.row}>
          {items}
        </div>
      )
    },
    [articles, itemsPerRow, target, view]
  )

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={ETextSize.L} title={t('статьи не найдены')} />
      </div>
    )
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) ?? undefined}
    >
      {({
        width,
        height,
        registerChild,
        scrollTop,
        onChildScroll,
        isScrolling,
      }) => {
        return (
          <div
            // @ts-expect-error
            ref={registerChild}
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          >
            {virtualized ? (
              <List
                autoHeight
                width={width ? width - 80 : 700}
                height={height ?? 700}
                rowHeight={isBig ? 700 : 330}
                rowCount={rowCount}
                rowRenderer={rowRenderer}
                scrollTop={scrollTop}
                onScroll={onChildScroll}
                isScrolling={isScrolling}
              />
            ) : (
              articles.map((article) => (
                <ArticleListItem
                  article={article}
                  key={article.id}
                  view={view}
                  target={target}
                />
              ))
            )}

            {isLoading && renderSkeleton(view)}
          </div>
        )
      }}
    </WindowScroller>
  )
})
