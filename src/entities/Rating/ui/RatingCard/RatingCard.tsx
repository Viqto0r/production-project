import { memo, useCallback, useState, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './RatingCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { StarRating } from '@/shared/ui/StarRating'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { EButtonSize, EButtonTheme } from '@/shared/ui/Button/ui/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer'

interface IRatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard: FC<IRatingCardProps> = memo((props) => {
  const { className, onAccept, onCancel, title, hasFeedback, feedbackTitle } =
    props
  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedStars, setSelectedStars] = useState(0)
  const [feedback, setFeedback] = useState('')

  const onSelectStar = useCallback(
    (starsNumber: number) => {
      setSelectedStars(starsNumber)

      if (hasFeedback && starsNumber !== 0 && selectedStars !== starsNumber) {
        setIsModalOpen(true)
      } else {
        onAccept?.(selectedStars)
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
    <>
      <Text title={feedbackTitle} />
      <Input
        placeholder={t('ваш отзыв')}
        value={feedback}
        onChange={handleFeedbackChange}
      />
    </>
  )

  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
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
            <HStack max gap="16" justify="end">
              <Button theme={EButtonTheme.OUTLINE_RED} onClick={handleCancel}>
                {t('закрыть')}
              </Button>
              <Button onClick={handleAccept}>{t('отправить')}</Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={handleCancel} lazy>
          <VStack gap="32">
            {modalContent}
            <Button onClick={handleAccept} size={EButtonSize.L} fullWidth>
              {t('отправить')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  )
})