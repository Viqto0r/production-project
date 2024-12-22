import { IStateSchema } from '@/app/providers/StoreProvider'
import { useSelector } from 'react-redux'

type TSelector<T, Args extends unknown[]> = (
  state: IStateSchema,
  ...args: Args
) => T
type THook<T, Args extends unknown[]> = (...args: Args) => T
type TResult<T, Args extends unknown[]> = [THook<T, Args>, TSelector<T, Args>]

export const buildSelector = <T, Args extends unknown[]>(
  selector: TSelector<T, Args>
): TResult<T, Args> => {
  const useSelectorHook: THook<T, Args> = (...args: Args) =>
    useSelector((state: IStateSchema) => selector(state, ...args))

  return [useSelectorHook, selector]
}
