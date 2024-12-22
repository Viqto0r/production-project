export { getCounterValue } from './model/selectors/getCounterValue/getCounterValue'
export {
  useCounterActions as counterActions,
  counterReducer,
} from './model/slice/counterSlice'
export { Counter } from './ui/Counter'
export type { ICounterSchema } from './model/types/counterSchema'
