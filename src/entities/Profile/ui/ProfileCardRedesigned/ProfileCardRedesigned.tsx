import { memo, useCallback, type FC } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { IProfileCardProps } from '../ProfileCard/ProfileCard'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { CurrencySelect } from '@/entities/CurrencySelect'
import { CountrySelect } from '@/entities/CountrySelect'
// eslint-disable-next-line viqtor-plugin/layer-imports
import { ProfileRating } from '@/features/ProfileRating'
import { useTranslation } from 'react-i18next'
import { numberValidator } from '@/shared/lib/validators/numberValidator/numberValidator'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Text } from '@/shared/ui/redesigned/Text'

export const ProfileCardRedesignedSkeleton = memo(() => {
  return (
    <Card fullWidth padding="24">
      <VStack gap="32">
        <HStack max justify="center">
          <Skeleton border="100%" width={128} height={128} />
        </HStack>
        <HStack gap="32" max>
          <VStack gap="16" max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>
          <VStack gap="16" max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  )
})

export const ProfileCardRedesignedError = memo(() => {
  const { t } = useTranslation('profile')

  return (
    <HStack justify="center" max>
      <Text
        variant="error"
        title={t('произошла ошибка при загрузке')}
        text={t('попробуйте обновить страницу')}
        align="center"
      />
    </HStack>
  )
})

export const ProfileCardRedesigned: FC<IProfileCardProps> = memo((props) => {
  const { data, className, readonly, onChangeValue } = props
  const { t } = useTranslation('profile')

  const handleChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target
      onChangeValue(value, name)
    },
    [onChangeValue]
  )

  return (
    <Card className={className} fullWidth padding="24">
      <VStack gap="32">
        {data?.avatar && (
          <HStack justify="center" max>
            <Avatar src={data?.avatar} alt={t('аватар')} size={128} />
          </HStack>
        )}
        <HStack gap="24" max>
          <VStack gap="16" max>
            <Input
              value={data?.firstName || ''}
              label={t('имя')}
              readonly={readonly}
              onChange={handleChangeInputValue}
              maxLength={15}
              name="firstName"
              data-testid="ProfileCard.firstName"
            />
            <Input
              value={data?.lastName || ''}
              label={t('фамилия')}
              readonly={readonly}
              maxLength={15}
              onChange={handleChangeInputValue}
              name="lastName"
              data-testid="ProfileCard.lastName"
            />
            <Input
              value={(data?.age || '').toString()}
              label={t('возраст')}
              readonly={readonly}
              maxLength={3}
              onChange={handleChangeInputValue}
              name="age"
              validate={numberValidator}
            />
            <Input
              value={data?.city || ''}
              label={t('город')}
              readonly={readonly}
              maxLength={15}
              onChange={handleChangeInputValue}
              name="city"
            />
          </VStack>
          <VStack gap="16" max>
            <Input
              value={data?.username || ''}
              label={t('имя пользователя')}
              readonly={readonly}
              onChange={handleChangeInputValue}
              maxLength={15}
              name="username"
              data-testid="ProfileCard.username"
            />
            <Input
              value={data?.avatar || ''}
              label={t('ссылка на аватар')}
              readonly={readonly}
              onChange={handleChangeInputValue}
              name="avatar"
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeValue}
              name="currency"
              readOnly={readonly}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeValue}
              name="country"
              readOnly={readonly}
            />
          </VStack>
        </HStack>
      </VStack>

      {data?.id && <ProfileRating profileId={data?.id} />}
    </Card>
  )
})
