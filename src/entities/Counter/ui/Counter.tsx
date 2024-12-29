import { type FC } from 'react'
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'
import { Button } from '@/shared/ui/deprecated/Button'

export const Counter: FC = () => {
  const value = useCounterValue()
  const { decrement, increment } = useCounterActions()

  return (
    <div data-testid="counter">
      <Button data-testid="decrement" onClick={decrement}>
        -
      </Button>
      <div data-testid="value">{value}</div>
      <Button data-testid="increment" onClick={increment}>
        +
      </Button>
    </div>
  )
}
