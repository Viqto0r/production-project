import { memo, useCallback, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text'
import { Button, EThemeButton } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { profileActions } from 'entities/Profile/model/slice/profileSlice'
import { getProfileData, updateProfileData } from 'entities/Profile'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack'

interface IProfilePageHeaderProps {
  className?: string
  readonly?: boolean
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = memo((props) => {
  const { className, readonly } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  const handleResetProfile = useCallback(() => {
    dispatch(profileActions.resetProfile())
  }, [dispatch])

  return (
    <HStack justify="between" className={classNames('', {}, [className])} max>
      <Text title={t('профиль')} />
      {canEdit && (
        <HStack gap="16">
          {readonly ? (
            <Button theme={EThemeButton.OUTLINE} onClick={onEdit}>
              {t('редактировать')}
            </Button>
          ) : (
            <>
              <Button
                theme={EThemeButton.OUTLINE_RED}
                onClick={handleResetProfile}
              >
                {t('отменить')}
              </Button>
              <Button theme={EThemeButton.OUTLINE} onClick={onSave}>
                {t('сохранить')}
              </Button>
            </>
          )}
        </HStack>
      )}
    </HStack>
  )
})
