import { classNames, type TMods } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { type FC } from 'react'
import { Text } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input'
import { type IProfile } from 'entities/Profile/model/types/profile'
import { Loader } from 'shared/ui/Loader'
import { ETextAlign, ETextTheme } from 'shared/ui/Text/ui/Text'
import { numberValidator } from 'shared/lib/validators/numberValidator/numberValidator'
import { Avatar } from 'shared/ui/Avatar'
import { CurrencySelect } from 'entities/CurrencySelect'
import { CountrySelect } from 'entities/CountrySelect'

interface IProfileCardProps {
  className?: string
  data?: IProfile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeValue: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  const { data, isLoading, className, error, readonly, onChangeValue } = props

  const { t } = useTranslation('profile')

  const mods: TMods = { [cls.editing]: !readonly }

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={ETextTheme.ERROR}
          title={t('произошла ошибка при загрузке')}
          text={t('попробуйте обновить страницу')}
          align={ETextAlign.CENTER}
        />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt={t('аватар')} />
        </div>
      )}
      <div className={cls.data}>
        <Input
          value={data?.firstName || ''}
          placeholder={t('ваше имя')}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeValue}
          maxLength={15}
          name="firstName"
        />
        <Input
          value={data?.lastName || ''}
          placeholder={t('ваша фамилия')}
          className={cls.input}
          readOnly={readonly}
          maxLength={15}
          onChange={onChangeValue}
          name="lastName"
        />
        <Input
          value={(data?.age || '').toString()}
          placeholder={t('ваш возраст')}
          className={cls.input}
          readOnly={readonly}
          maxLength={3}
          onChange={onChangeValue}
          name="age"
          validate={numberValidator}
        />
        <Input
          value={data?.city || ''}
          placeholder={t('ваш город')}
          className={cls.input}
          readOnly={readonly}
          maxLength={15}
          onChange={onChangeValue}
          name="city"
        />
        <Input
          value={data?.avatar || ''}
          placeholder={t('введите ссылку на аватар')}
          className={cls.input}
          readOnly={readonly}
          onChange={onChangeValue}
          name="avatar"
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeValue}
          className={cls.input}
          name="currency"
          readOnly={readonly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeValue}
          className={cls.input}
          name="country"
          readOnly={readonly}
        />
      </div>
    </div>
  )
}
