import { screen } from '@testing-library/react'

import { Counter } from './Counter'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { userEvent } from '@storybook/test'

describe('Counter', () => {
  test('Render', () => {
    componentRender(<Counter />)

    const counter = screen.getByTestId('counter')

    expect(counter).toBeInTheDocument()
  })

  test('increment', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })

    const incrementButton = screen.getByTestId('increment')

    await userEvent.click(incrementButton)
    expect(screen.getByTestId('value')).toHaveTextContent('11')
  })

  test('decrement', async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })

    const decrementButton = screen.getByTestId('decrement')

    await userEvent.click(decrementButton)
    expect(screen.getByTestId('value')).toHaveTextContent('9')
  })
})
