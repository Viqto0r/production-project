import { memo, useCallback, useMemo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text'
import { ETextTheme } from 'shared/ui/Text/ui/Text'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { getFormData } from '../../model/selectors/getFormData/getFormData'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { ProfileCard } from 'entities/Profile'
import { EValidateProfileErrors } from '../../model/types/editableProfileCardSchema'
import {
  DynamicModuleLoader,
  type TReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'
import { VStack } from 'shared/ui/Stack'

interface IEditableProfileCardProps {
  className?: string
  id: string
}

const asyncReducers: TReducerList = {
  profile: profileReducer,
}

export const EditableProfileCard: FC<IEditableProfileCardProps> = memo(
  (props) => {
    const { className, id } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
      if (id) {
        dispatch(fetchProfileData(id))
      }
    })

    const data = useSelector(getFormData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)

    const validateErrorTranslates = useMemo(
      () => ({
        [EValidateProfileErrors.INCORRECT_USER_DATA]: t(
          'имя и фамилия обязательны'
        ),
        [EValidateProfileErrors.INCORRECT_AGE]: t('некорректный возраст'),
        [EValidateProfileErrors.INCORRECT_COUNTRY]: t('некорректный регион'),
        [EValidateProfileErrors.NO_DATA]: t('данные не указаны'),
        [EValidateProfileErrors.SERVER_ERROR]: t(
          'серверная ошибка при сохранении'
        ),
      }),
      [t]
    )

    const handleChangeValue = useCallback(
      (value: string, name: string | undefined) => {
        if (!name) return
        dispatch(profileActions.updateProfileData({ [name]: value }))
      },
      [dispatch]
    )

    return (
      <DynamicModuleLoader reducers={asyncReducers}>
        <VStack gap="8" max className={classNames('', {}, [className])}>
          <EditableProfileCardHeader />
          {validateErrors?.map((error) => (
            <Text
              text={validateErrorTranslates[error]}
              key={error}
              theme={ETextTheme.ERROR}
            />
          ))}
          <ProfileCard
            data={data}
            isLoading={isLoading}
            error={error}
            readonly={readonly}
            onChangeValue={handleChangeValue}
          />
        </VStack>
      </DynamicModuleLoader>
    )
  }
)
