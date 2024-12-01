import { useCallback, type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'
import { Button } from 'shared/ui/Button'

export const Counter: FC = () => {
  const value = useSelector(getCounterValue)
  const dispatch = useDispatch()

  const increment = useCallback(() => {
    dispatch(counterActions.increment())
  }, [dispatch])

  const decrement = useCallback(() => {
    dispatch(counterActions.decrement())
  }, [dispatch])

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
