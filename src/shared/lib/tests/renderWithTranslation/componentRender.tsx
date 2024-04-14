import { render } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTest from 'shared/config/i18n/i18nForTests'

interface IOptions {
  routes?: string
}

export const componentRender = (
  component: ReactNode,
  options: IOptions = {}
) => {
  const { routes = '/' } = options
  return render(
    <MemoryRouter initialEntries={[routes]}>
      <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
    </MemoryRouter>
  )
}
