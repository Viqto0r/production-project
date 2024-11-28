import { memo } from 'react'
import { Page } from 'widgets/Page'
import { VStack } from 'shared/ui/Stack'
import { EditableProfileCard } from 'features/EditableProfileCard'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'

export default memo(function ProfilePage() {
  const { id: profileId } = useParams<{ id: string }>()
  const { t } = useTranslation('profile')

  if (!profileId) {
    return <Text text={t('профиль не найден')} />
  }

  return (
    <Page>
      <VStack gap="16" max>
        <EditableProfileCard id={profileId} />
      </VStack>
    </Page>
  )
})
