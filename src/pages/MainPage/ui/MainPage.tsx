import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { StarRating } from '@/shared/ui/StarRating'
import { RatingCard } from '@/entities/Rating'

export default memo(function MainPage() {
  const { t } = useTranslation()
  const [selectedStars, setSelectedStars] = useState(0)

  return (
    <Page>
      {t('главная страница')}
      <StarRating selectedStar={selectedStars} onSelect={setSelectedStars} />
      <RatingCard
        title="Как вам статья?"
        feedbackTitle="Оставьте отзыв о статье"
        hasFeedback={true}
      />
    </Page>
  )
})
