import { render } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type IStateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTest from 'shared/config/i18n/i18nForTests'

interface IOptions {
  routes?: string
  initialState?: DeepPartial<IStateSchema>
}

export const componentRender = (
  component: ReactNode,
  options: IOptions = {}
) => {
  const { routes = '/', initialState } = options
  return render(
    <MemoryRouter initialEntries={[routes]}>
      <StoreProvider initialState={initialState as IStateSchema}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}
