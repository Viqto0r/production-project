import { buildSelector } from '@/shared/lib/store/buildSelector'
import { IStateSchema } from '@/app/providers/StoreProvider'

export const [useCounterValue, getCounterValue] = buildSelector(
  (state: IStateSchema) => state.counter.value
)
