import { Button, EButtonTheme } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  test('Render with children', () => {
    render(<Button>Test</Button>)

    const button = screen.getByText('Test')
    expect(button).toBeInTheDocument()
  })

  test('Render with class', () => {
    render(<Button theme={EButtonTheme.CLEAR}>Test</Button>)
    const button = screen.getByText('Test')
    expect(button).toHaveClass('clear')
  })
})
