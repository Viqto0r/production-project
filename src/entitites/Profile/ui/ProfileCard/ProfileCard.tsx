import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { type FC } from 'react'
import { Text } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { Button, EThemeButton } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entitites/Profile/model/selectors/getProfileData/getProfileData'

interface IProfileCardProps {
  className?: string
}

export const ProfileCard: FC<IProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const profileData = useSelector(getProfileData)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('профиль')} />
        <Button theme={EThemeButton.OUTLINE} className={cls.editBtn}>
          {t('редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={profileData?.first || ''}
          placeholder={t('ваше имя')}
          className={cls.input}
        />
        <Input
          value={profileData?.lastname || ''}
          placeholder={t('ваша фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  )
}
