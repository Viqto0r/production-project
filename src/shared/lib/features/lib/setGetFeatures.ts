import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage'
import { IFeatureFlags } from '@/shared/types/featuresFlags'

const defaultFeatureFlags = {
  isAppRedesigned:
    localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
}

// Не меняется в ходе сессии
let featureFlags: IFeatureFlags = {
  ...defaultFeatureFlags,
}

export const setFeatureFlags = (newFeatureFlags?: IFeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags
  }
}

export const getFeatureFlag = (key: keyof IFeatureFlags) => featureFlags?.[key]

export const getAllFeatureFlags = () => featureFlags
