import { memo, ReactElement, type FC } from 'react'
import { IFeatureFlags } from '@/shared/types/featuresFlags'
import { getFeatureFlag } from '../setGetFeatures'

interface IToggleFeaturesProps {
  feature: keyof IFeatureFlags
  on: ReactElement
  off: ReactElement
}

export const ToggleFeatures: FC<IToggleFeaturesProps> = memo((props) => {
  const { feature, on, off } = props

  return getFeatureFlag(feature) ? on : off
})
