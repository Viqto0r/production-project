import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { EArticleView } from '../../model/consts/consts'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'

interface IArticleListItemSkeletonProps {
  className?: string
  view: EArticleView
}

export const ArticleListItemSkeleton: FC<IArticleListItemSkeletonProps> = memo(
  (props) => {
    const { className, view } = props

    const mainClass = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => cls.ArticleListItemRedesigned,
      off: () => cls.ArticleListItem,
    })

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    })

    if (view === EArticleView.BIG) {
      const cardContent = (
        <>
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
        </>
      )

      return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<CardRedesigned>{cardContent}</CardRedesigned>}
            off={<CardDeprecated>{cardContent}</CardDeprecated>}
          />
        </div>
      )
    }

    const cardContent = (
      <>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Skeleton
              width="100%"
              height={150}
              border={32}
              className={cls.img}
            />
          }
          off={
            <div className={cls.imageWrapper}>
              <Skeleton width={200} height={200} className={cls.img} />
            </div>
          }
        />
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={24} />
        </div>
        <Skeleton width={150} height={24} className={cls.title} />
      </>
    )

    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <CardRedesigned border="round" className={cls.card}>
              {cardContent}
            </CardRedesigned>
          }
          off={
            <CardDeprecated className={cls.card}>{cardContent}</CardDeprecated>
          }
        />
      </div>
    )
  }
)
