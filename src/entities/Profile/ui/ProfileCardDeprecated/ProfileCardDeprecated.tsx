import { memo, useCallback, type FC } from 'react'
import { classNames, TMods } from '@/shared/lib/classNames/classNames'
import cls from './ProfileCardDeprecated.module.scss'
import { IProfileCardProps } from '../ProfileCard/ProfileCard'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { useTranslation } from 'react-i18next'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Input } from '@/shared/ui/deprecated/Input'
import { numberValidator } from '@/shared/lib/validators/numberValidator/numberValidator'
import { CurrencySelect } from '@/entities/CurrencySelect'
import { CountrySelect } from '@/entities/CountrySelect'
// eslint-disable-next-line
import { ProfileRating } from '@/features/ProfileRating'
import { Text } from '@/shared/ui/deprecated/Text'
import { ETextAlign, ETextTheme } from '@/shared/ui/deprecated/Text/ui/Text'

export const ProfileCardDeprecatedLoader = memo(() => {
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, {}, [cls.loading])}
    >
      <Loader />
    </HStack>
  )
})

export const ProfileCardDeprecatedError = memo(() => {
  const { t } = useTranslation('profile')

  return (
    <HStack
      className={classNames(cls.ProfileCard, {}, [cls.error])}
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
})

export const ProfileCardDeprecated: FC<IProfileCardProps> = memo((props) => {
  const { data, className, readonly, onChangeValue } = props

  const { t } = useTranslation('profile')
  const mods: TMods = { [cls.editing]: !readonly }

  const handleChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target
      onChangeValue(value, name)
    },
    [onChangeValue]
  )

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
        name="nickName"
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
})
