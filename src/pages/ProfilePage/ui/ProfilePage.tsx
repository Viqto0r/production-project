import { memo, useCallback, useMemo } from 'react'
import {
  DynamicModuleLoader,
  type TReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useSelector } from 'react-redux'
import {
  profileActions,
  profileReducer,
} from 'entities/Profile/model/slice/profileSlice'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import {
  fetchProfileData,
  getFormData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  ProfileCard,
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text } from 'shared/ui/Text'
import { getProfileValidateErrors } from 'entities/Profile/model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { EValidateProfileErrors } from 'entities/Profile/model/types/profile'
import { ETextTheme } from 'shared/ui/Text/ui/Text'
import { useTranslation } from 'react-i18next'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'

const asyncReducers: TReducerList = {
  profile: profileReducer,
}

export default memo(function MainPage() {
  const dispatch = useAppDispatch()
  const { id: profileId } = useParams<{ id: string }>()

  useInitialEffect(() => {
    if (profileId) {
      dispatch(fetchProfileData(profileId))
    }
  })

  const data = useSelector(getFormData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const { t } = useTranslation('profile')

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
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { target } = e
      const { name: key, value } = target

      dispatch(profileActions.updateProfileData({ [key]: value }))
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={asyncReducers}>
      <ProfilePageHeader readonly={readonly} />
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
    </DynamicModuleLoader>
  )
})
