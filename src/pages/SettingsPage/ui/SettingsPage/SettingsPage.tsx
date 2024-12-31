import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '@/shared/ui/redesigned/Text'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { UiDesignSwitcher } from '@/features/UiDesignSwitcher'

interface ISettingsPageProps {
  className?: string
}

const SettingsPage: FC<ISettingsPageProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page className={className}>
      <VStack gap="16">
        <Text text={t('настройки пользователя')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  )
})

export default SettingsPage
