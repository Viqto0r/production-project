import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from '@/entities/Article'
import { useParams } from 'react-router-dom'
import {
  DynamicModuleLoader,
  type TReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { VStack } from '@/shared/ui/Stack'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleRating } from '@/features/ArticleRating'
import { getFeatureFlags } from '@/shared/lib/features'
import { Counter } from '@/entities/Counter'

interface IArticleDetailsPageProps {
  className?: string
}

const asyncReducers: TReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = memo((props) => {
  const { className } = props
  const { id: articleId } = useParams<{ id: string }>()
  const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled')
  const isCounterEnabled = getFeatureFlags('isCounterEnabled')

  if (!articleId) {
    return null
  }

  return (
    <DynamicModuleLoader reducers={asyncReducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack max gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={articleId} />
          {isArticleRatingEnabled && <ArticleRating articleId={articleId} />}
          {isCounterEnabled && <Counter />}
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={articleId} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
})

export default ArticleDetailsPage
