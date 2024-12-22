import { memo, useCallback, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { Button, EThemeButton } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { HStack } from '@/shared/ui/Stack'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { getUserAuthData } from '@/entities/User'

interface IEditableProfileCardHeaderProps {
  className?: string
  readonly?: boolean
}

export const EditableProfileCardHeader: FC<IEditableProfileCardHeaderProps> =
  memo((props) => {
    const { className } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const readonly = useSelector(getProfileReadonly)
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
              <Button
                theme={EThemeButton.OUTLINE}
                onClick={onEdit}
                data-testid="EditableProfileCardHeader.EditButton"
              >
                {t('редактировать')}
              </Button>
            ) : (
              <>
                <Button
                  theme={EThemeButton.OUTLINE_RED}
                  onClick={handleResetProfile}
                  data-testid="EditableProfileCardHeader.CancelButton"
                >
                  {t('отменить')}
                </Button>
                <Button
                  theme={EThemeButton.OUTLINE}
                  onClick={onSave}
                  data-testid="EditableProfileCardHeader.SaveButton"
                >
                  {t('сохранить')}
                </Button>
              </>
            )}
          </HStack>
        )}
      </HStack>
    )
  })
