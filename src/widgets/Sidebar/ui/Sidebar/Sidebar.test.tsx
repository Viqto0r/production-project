import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
  test('Render', () => {
    componentRender(<Sidebar />)

    const sidebar = screen.getByTestId('sidebar')

    expect(sidebar).toBeInTheDocument()
  })

  test('Toggle collapse', () => {
    componentRender(<Sidebar />)

    const sidebar = screen.getByTestId('sidebar')
    const toggler = screen.getByTestId('sidebar-toggle')

    fireEvent.click(toggler)
    expect(sidebar).toHaveClass('collapsed')
  })
})
