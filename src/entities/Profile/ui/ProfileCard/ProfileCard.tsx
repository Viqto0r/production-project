import { classNames, type TMods } from '@/shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useCallback, type FC } from 'react'
import { Text } from '@/shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { Input } from '@/shared/ui/Input'
import { type IProfile } from '../../model/types/profile'
import { Loader } from '@/shared/ui/Loader'
import { ETextAlign, ETextTheme } from '@/shared/ui/Text/ui/Text'
import { numberValidator } from '@/shared/lib/validators/numberValidator/numberValidator'
import { Avatar } from '@/shared/ui/Avatar'
import { CurrencySelect } from '@/entities/CurrencySelect'
import { CountrySelect } from '@/entities/CountrySelect'
import { HStack, VStack } from '@/shared/ui/Stack'
// eslint-disable-next-line
import { ProfileRating } from '@/features/ProfileRating'

interface IProfileCardProps {
  className?: string
  data?: IProfile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeValue: (value: string, name: string | undefined) => void
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  const { data, isLoading, className, error, readonly, onChangeValue } = props

  const { t } = useTranslation('profile')

  const mods: TMods = { [cls.editing]: !readonly }

  const handleChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target
      onChangeValue(value, name)
    },
    [onChangeValue]
  )

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    )
  }

  if (error) {
    return (
      <HStack
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
        justify="center"
        max
      >
        <Text
          theme={ETextTheme.ERROR}
          title={t('произошла ошибка при загрузке')}
          text={t('попробуйте обновить страницу')}
          align={ETextAlign.CENTER}
        />
      </HStack>
    )
  }

  return (
    <VStack
      gap="8"
      className={classNames(cls.ProfileCard, mods, [className])}
      max
    >
      {data?.avatar && (
        <HStack justify="center" max>
          <Avatar src={data?.avatar} alt={t('аватар')} />
        </HStack>
      )}
      <Input
        value={data?.firstName || ''}
        placeholder={t('ваше имя')}
        readOnly={readonly}
        onChange={handleChangeInputValue}
        maxLength={15}
        name="firstName"
        data-testid="ProfileCard.firstName"
      />
      <Input
        value={data?.lastName || ''}
        placeholder={t('ваша фамилия')}
        readOnly={readonly}
        maxLength={15}
        onChange={handleChangeInputValue}
        name="lastName"
        data-testid="ProfileCard.lastName"
      />
      <Input
        value={(data?.age || '').toString()}
        placeholder={t('ваш возраст')}
        readOnly={readonly}
        maxLength={3}
        onChange={handleChangeInputValue}
        name="age"
        validate={numberValidator}
      />
      <Input
        value={data?.city || ''}
        placeholder={t('ваш город')}
        readOnly={readonly}
        maxLength={15}
        onChange={handleChangeInputValue}
        name="city"
      />
      <Input
        value={data?.avatar || ''}
        placeholder={t('введите ссылку на аватар')}
        readOnly={readonly}
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
      {data?.id && <ProfileRating profileId={data?.id} />}
    </VStack>
  )
}
