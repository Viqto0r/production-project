import { memo, useCallback, useEffect, useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { Text } from '@/shared/ui/deprecated/Text'
import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { isMobile } from 'react-device-detect'
import { Drawer } from '@/shared/ui/deprecated/Drawer'

export const ArticlePageGreeting: FC = memo(() => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const { isArticlesPageWasOpened } = useJsonSettings()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true)
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }))
    }
  }, [dispatch, isArticlesPageWasOpened])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const text = (
    <Text
      title={t('добро пожаловать на страницу статей')}
      text={t(
        'здесь вы можете искать и просматривать статьи на различные темы'
      )}
    />
  )

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} onClose={handleClose} lazy>
        {text}
      </Drawer>
    )
  }
  return (
    <Modal isOpen={isOpen} onClose={handleClose} lazy>
      {text}
    </Modal>
  )
})
