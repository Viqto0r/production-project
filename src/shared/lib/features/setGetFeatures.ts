import { IFeatureFlags } from '@/shared/types/featuresFlags'

// Не меняется в ходе сессии
let featureFlags: IFeatureFlags

export const setFeatureFlags = (newFeatureFlags?: IFeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags
  }
}

export const getFeatureFlag = (key: keyof IFeatureFlags) => featureFlags[key]
