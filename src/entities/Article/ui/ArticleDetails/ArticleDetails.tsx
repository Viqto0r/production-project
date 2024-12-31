import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import {
  DynamicModuleLoader,
  type TReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsData'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import {
  ETextAlign,
  ETextSize,
  ETextTheme,
} from '@/shared/ui/deprecated/Text/ui/Text'
import { useTranslation } from 'react-i18next'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { renderArticleBlock } from './renderArticleBlock'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

interface IArticleDetailsProps {
  className?: string
  id?: string
}

const asyncReducers: TReducerList = { articleDetails: articleDetailsReducer }

const Deprecated = memo(() => {
  const article = useSelector(getArticleDetailsData)

  return (
    <>
      <HStack justify="center" max>
        <AvatarDeprecated size={200} alt="avatar" src={article?.img} />
      </HStack>
      <VStack gap="4" max data-testid="ArticleDetailsPage.Info">
        <TextDeprecated
          title={article?.title}
          text={article?.subtitle}
          size={ETextSize.L}
        />
        <HStack gap="8">
          <IconDeprecated Svg={EyeIcon} />
          <TextDeprecated text={article?.views.toString()} />
        </HStack>
        <HStack gap="8">
          <IconDeprecated Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  )
})

const Redesigned = memo(() => {
  const article = useSelector(getArticleDetailsData)

  return (
    <>
      <Text title={article?.title} size="l" bold />
      <Text title={article?.subtitle} />
      <AppImage
        fallback={<Skeleton width="100%" height={420} border={16} />}
        src={article?.img}
        className={cls.image}
      />
      {/* <VStack gap="4" max data-testid="ArticleDetailsPage.Info">
        <HStack gap="8">
          <Icon Svg={EyeIcon} />
          <Text text={article?.views.toString()} />
        </HStack>
        <HStack gap="8">
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </HStack>
      </VStack> */}
      {article?.blocks.map(renderArticleBlock)}
    </>
  )
})

export const ArticleDetails: FC<IArticleDetailsProps> = memo((props) => {
  const { className, id } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation('article-details')

  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)

  useInitialEffect(() => {
    dispatch(fetchArticleById(id))
  })

  let content

  if (isLoading) {
    content = (
      <>
        <SkeletonDeprecated
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <SkeletonDeprecated className={cls.title} width={300} height={32} />
        <SkeletonDeprecated className={cls.skeleton} width={600} height={24} />
        <SkeletonDeprecated
          className={cls.skeleton}
          width="100%"
          height={200}
        />
        <SkeletonDeprecated
          className={cls.skeleton}
          width="100%"
          height={200}
        />
      </>
    )
  } else if (error) {
    content = (
      <TextDeprecated
        theme={ETextTheme.ERROR}
        title={t('произошла ошибка при загрузке статьи')}
        align={ETextAlign.CENTER}
      />
    )
  } else {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Redesigned />}
        off={<Deprecated />}
      />
    )
  }

  return (
    <DynamicModuleLoader reducers={asyncReducers}>
      <VStack
        gap="16"
        className={classNames(cls.ArticleDetails, {}, [className])}
        max
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})
