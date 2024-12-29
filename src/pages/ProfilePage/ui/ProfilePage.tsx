import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { EditableProfileCard } from '@/features/EditableProfileCard'
import { useParams } from 'react-router-dom'

export default memo(function ProfilePage() {
  const { id: profileId } = useParams<{ id: string }>()

  return (
    <Page data-testid="ProfilePage">
      <VStack gap="16" max>
        <EditableProfileCard id={profileId} />
      </VStack>
    </Page>
  )
})
