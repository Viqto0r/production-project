import { IFeatureFlags } from '@/shared/types/featuresFlags'
import { getFeatureFlag } from './setGetFeatures'

interface IToggleFeaturesOptions<T> {
  name: keyof IFeatureFlags
  on: () => T
  off: () => T
}

export const toggleFeatures = <T>({
  name,
  on,
  off,
}: IToggleFeaturesOptions<T>): T => {
  return getFeatureFlag(name) ? on() : off()
}
