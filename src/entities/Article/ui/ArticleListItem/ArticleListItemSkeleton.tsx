import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { EArticleView } from '../../model/consts/consts'
import { Card } from '@/shared/ui/deprecated/Card'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'

interface IArticleListItemSkeletonProps {
  className?: string
  view: EArticleView
}

export const ArticleListItemSkeleton: FC<IArticleListItemSkeletonProps> = memo(
  (props) => {
    const { className, view } = props

    if (view === EArticleView.BIG) {
      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card>
            <div className={cls.header}>
              <Skeleton width={30} height={30} border="50%" />
              <Skeleton className={cls.username} width={150} height={16} />
              <Skeleton className={cls.date} width={150} height={16} />
            </div>
            <Skeleton className={cls.title} width={250} height={24} />
            <Skeleton className={cls.img} height={200} />
            <div className={cls.footer}>
              <Skeleton height={36} width={200} />
            </div>
          </Card>
        </div>
      )
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} className={cls.title} />
        </Card>
      </div>
    )
  }
)
