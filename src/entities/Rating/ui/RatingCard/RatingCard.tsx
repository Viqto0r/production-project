import { memo, useCallback, useEffect, useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button'
import {
  EButtonSize,
  EButtonTheme,
} from '@/shared/ui/deprecated/Button/ui/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input } from '@/shared/ui/redesigned/Input'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'

interface IRatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

export const RatingCard: FC<IRatingCardProps> = memo((props) => {
  const {
    className,
    onAccept,
    onCancel,
    title,
    hasFeedback,
    feedbackTitle,
    rate = 0,
  } = props
  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedStars, setSelectedStars] = useState(rate)
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    setSelectedStars(rate)
  }, [rate])

  const onSelectStar = useCallback(
    (starsNumber: number) => {
      setSelectedStars(starsNumber)

      if (hasFeedback && starsNumber !== 0 && selectedStars !== starsNumber) {
        setIsModalOpen(true)
      } else {
        onAccept?.(starsNumber)
      }
    },
    [hasFeedback, onAccept, selectedStars]
  )

  const handleFeedbackChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFeedback(e.target.value)
    },
    []
  )

  const handleAccept = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(selectedStars, feedback)
    setFeedback('')
  }, [feedback, onAccept, selectedStars])

  const handleCancel = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(selectedStars)
    setFeedback('')
  }, [onCancel, selectedStars])

  const modalContent = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            placeholder={t('ваш отзыв')}
            value={feedback}
            onChange={handleFeedbackChange}
            data-testid="RatingCard.Input"
          />
        </>
      }
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            placeholder={t('ваш отзыв')}
            value={feedback}
            onChange={handleFeedbackChange}
            data-testid="RatingCard.Input"
          />
        </>
      }
    />
  )

  const content = (
    <>
      <VStack align="center" gap="8">
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={selectedStars ? t('спасибо за оценку') : title} />}
          off={
            <TextDeprecated
              title={selectedStars ? t('спасибо за оценку') : title}
            />
          }
        />

        <StarRating
          size={40}
          onSelect={onSelectStar}
          selectedStar={selectedStars}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} onClose={handleCancel} lazy>
          <VStack gap="32" max>
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <HStack max gap="16" justify="end">
                  <Button onClick={handleCancel} data-testid="RatingCard.Close">
                    {t('закрыть')}
                  </Button>
                  <Button onClick={handleAccept} data-testid="RatingCard.Send">
                    {t('отправить')}
                  </Button>
                </HStack>
              }
              off={
                <HStack max gap="16" justify="end">
                  <ButtonDeprecated
                    theme={EButtonTheme.OUTLINE_RED}
                    onClick={handleCancel}
                    data-testid="RatingCard.Close"
                  >
                    {t('закрыть')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    onClick={handleAccept}
                    data-testid="RatingCard.Send"
                  >
                    {t('отправить')}
                  </ButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={handleCancel} lazy>
          <VStack gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <Button onClick={handleAccept} size="l" fullWidth>
                  {t('отправить')}
                </Button>
              }
              off={
                <ButtonDeprecated
                  onClick={handleAccept}
                  size={EButtonSize.L}
                  fullWidth
                >
                  {t('отправить')}
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  )

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          className={className}
          padding="24"
          border="medium-round"
          fullWidth
          data-testid="RatingCard"
        >
          {content}
        </Card>
      }
      off={
        <CardDeprecated
          className={className}
          fullWidth
          data-testid="RatingCard"
        >
          {content}
        </CardDeprecated>
      }
    />
  )
})
