import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  DynamicModuleLoader,
  type TReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from '../model/slice/profileSlice'

const asyncReducers: TReducerList = {
  profile: profileReducer,
}

export default memo(function MainPage() {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={asyncReducers} removeAfterunmount>
      <div>{t('профиль')}</div>
    </DynamicModuleLoader>
  )
})
