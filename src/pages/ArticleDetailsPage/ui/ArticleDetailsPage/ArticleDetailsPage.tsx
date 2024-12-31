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
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleRating } from '@/features/ArticleRating'
import { ToggleFeatures } from '@/shared/lib/features'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/deprecated/Card'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { DetailsContainer } from '../DetailsContainer/DetailsContainer'
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer'

interface IArticleDetailsPageProps {
  className?: string
}

const asyncReducers: TReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = memo((props) => {
  const { className } = props
  const { id: articleId } = useParams<{ id: string }>()

  const { t } = useTranslation('article-details')

  if (!articleId) {
    return null
  }

  return (
    <DynamicModuleLoader reducers={asyncReducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <StickyContentLayout
            content={
              <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
              >
                <VStack max gap="16">
                  <DetailsContainer />
                  <ArticleRating articleId={articleId} />
                  <ArticleRecommendationsList />
                  <ArticleDetailsComments id={articleId} />
                </VStack>
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
        off={
          <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <VStack max gap="16">
              <ArticleDetailsPageHeader />
              <ArticleDetails id={articleId} />
              <Card>{t('оценка статей скоро появится')}</Card>
              <ArticleRecommendationsList />
              <ArticleDetailsComments id={articleId} />
            </VStack>
          </Page>
        }
      />
    </DynamicModuleLoader>
  )
})

export default ArticleDetailsPage
