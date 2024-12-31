import { memo, useCallback, type FC } from 'react'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import {
  Button as ButtonDeprecated,
  EThemeButton,
} from '@/shared/ui/deprecated/Button'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { getUserAuthData } from '@/entities/User'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import cls from './EditableProfileCardHeader.module.scss'

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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card fullWidth padding="24" border="medium-round">
            <HStack justify="between" className={className} max>
              <Text title={t('профиль')} className={cls.headerText} />
              {canEdit && (
                <HStack gap="16">
                  {readonly ? (
                    <Button
                      onClick={onEdit}
                      data-testid="EditableProfileCardHeader.EditButton"
                    >
                      {t('редактировать')}
                    </Button>
                  ) : (
                    <>
                      <Button
                        onClick={handleResetProfile}
                        data-testid="EditableProfileCardHeader.CancelButton"
                        color="decline"
                      >
                        {t('отменить')}
                      </Button>
                      <Button
                        onClick={onSave}
                        data-testid="EditableProfileCardHeader.SaveButton"
                        color="accept"
                      >
                        {t('сохранить')}
                      </Button>
                    </>
                  )}
                </HStack>
              )}
            </HStack>
          </Card>
        }
        off={
          <HStack justify="between" className={className} max>
            <TextDeprecated title={t('профиль')} />
            {canEdit && (
              <HStack gap="16">
                {readonly ? (
                  <ButtonDeprecated
                    theme={EThemeButton.OUTLINE}
                    onClick={onEdit}
                    data-testid="EditableProfileCardHeader.EditButton"
                  >
                    {t('редактировать')}
                  </ButtonDeprecated>
                ) : (
                  <>
                    <ButtonDeprecated
                      theme={EThemeButton.OUTLINE_RED}
                      onClick={handleResetProfile}
                      data-testid="EditableProfileCardHeader.CancelButton"
                    >
                      {t('отменить')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      theme={EThemeButton.OUTLINE}
                      onClick={onSave}
                      data-testid="EditableProfileCardHeader.SaveButton"
                    >
                      {t('сохранить')}
                    </ButtonDeprecated>
                  </>
                )}
              </HStack>
            )}
          </HStack>
        }
      />
    )
  })
