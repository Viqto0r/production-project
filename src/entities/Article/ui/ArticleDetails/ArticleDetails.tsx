import { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import {
  DynamicModuleLoader,
  type TReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsData'
import { Text } from 'shared/ui/Text'
import { ETextAlign, ETextSize, ETextTheme } from 'shared/ui/Text/ui/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/Skeleton/ui/ui/Skeleton'
import { Avatar } from 'shared/ui/Avatar'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'shared/ui/Icon'
import {
  EArticleBlockType,
  type TArticleBlock,
} from '../../model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'

interface IArticleDetailsProps {
  className?: string
  id: string
}

const asyncReducers: TReducerList = { articleDetails: articleDetailsReducer }

export const ArticleDetails: FC<IArticleDetailsProps> = memo((props) => {
  const { className, id } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation('article-details')

  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  const renderBlock = useCallback((block: TArticleBlock) => {
    switch (block.type) {
      case EArticleBlockType.CODE:
        return (
          <ArticleCodeBlock
            key={block.id}
            className={cls.block}
            block={block}
          />
        )
      case EArticleBlockType.IMAGE:
        return (
          <ArticleImageBlock
            key={block.id}
            className={cls.block}
            block={block}
          />
        )
      case EArticleBlockType.TEXT:
        return (
          <ArticleTextBlock
            key={block.id}
            className={cls.block}
            block={block}
          />
        )

      default:
        return null
    }
  }, [])

  useInitialEffect(() => {
    dispatch(fetchArticleById(id))
  })

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        theme={ETextTheme.ERROR}
        title={t('произошла ошибка при загрузке статьи')}
        align={ETextAlign.CENTER}
      />
    )
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar
            size={200}
            alt="avatar"
            src={article?.img}
            className={cls.avatar}
          />
        </div>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={ETextSize.L}
        />
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={EyeIcon} />
          <Text text={article?.views.toString()} />
        </div>
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={asyncReducers}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})