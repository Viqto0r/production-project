import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { ETextSize } from 'shared/ui/Text/ui/Text'
import { ArticleList } from 'entities/Article'
import { VStack } from 'shared/ui/Stack'
import { useGetArticleRecommendationsQuery } from '../../api/articleRecommendationsApi'

interface IArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList: FC<IArticleRecommendationsListProps> =
  memo((props) => {
    const { className } = props
    const { t } = useTranslation()

    const {
      isLoading,
      data: articles,
      isError,
    } = useGetArticleRecommendationsQuery(3)

    if (isLoading || isError) {
      return null
    }

    return (
      <VStack gap="8" className={classNames('', {}, [className])}>
        <Text size={ETextSize.L} title={t('рекомендуем')} />
        <ArticleList articles={articles} target="_blank" />
      </VStack>
    )
  })