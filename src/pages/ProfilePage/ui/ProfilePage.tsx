import { memo, useEffect } from 'react'
import {
  DynamicModuleLoader,
  type TReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useDispatch } from 'react-redux'
import { profileReducer } from 'entitites/Profile/model/slice/profileSlice'
import { fetchProfileData } from 'entitites/Profile/model/services/fetchProfileData/fetchProfileData'
import { ProfileCard } from 'entitites/Profile/ui/ProfileCard/ProfileCard'

const asyncReducers: TReducerList = {
  profile: profileReducer,
}

export default memo(function MainPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={asyncReducers} removeAfterunmount>
      <ProfileCard />
    </DynamicModuleLoader>
  )
})
