import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ETextSize } from '@/shared/ui/deprecated/Text/ui/Text'
import { ArticleList } from '@/entities/Article'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useGetArticleRecommendationsQuery } from '../../api/articleRecommendationsApi'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

interface IArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList: FC<IArticleRecommendationsListProps> =
  memo((props) => {
    const { className } = props
    const { t } = useTranslation('article-details')

    const {
      isLoading,
      data: articles,
      isError,
    } = useGetArticleRecommendationsQuery(3)

    if (isLoading || isError || !articles) {
      return null
    }

    return (
      <VStack
        gap="8"
        className={classNames('', {}, [className])}
        data-testid="ArticleRecommendationsList"
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text size="l" title={t('рекомендуем')} />}
          off={<TextDeprecated size={ETextSize.L} title={t('рекомендуем')} />}
        />
        <ArticleList articles={articles} target="_blank" />
      </VStack>
    )
  })
