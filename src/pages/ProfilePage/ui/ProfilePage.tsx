import { memo, useCallback, useEffect } from 'react'
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
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/AppDispatch'

const asyncReducers: TReducerList = {
  profile: profileReducer,
}

export default memo(function MainPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const data = useSelector(getFormData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)

  const handleChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { target } = e
      const { name: key, value } = target

      dispatch(profileActions.updateProfileDate({ [key]: value }))
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={asyncReducers} removeAfterUnmount>
      <ProfilePageHeader readonly={readonly} />
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
