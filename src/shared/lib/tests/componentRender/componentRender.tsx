/* eslint-disable viqtor-plugin/layer-imports */
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { type IStateSchema } from '@/app/providers/StoreProvider'
import { FC, PropsWithChildren, type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTest from '@/shared/config/i18n/i18nForTests'
import { ETheme } from '@/shared/const/theme'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/app/styles/index.scss'

interface IOptions {
  routes?: string
  initialState?: DeepPartial<IStateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
  theme?: ETheme
}

interface ITestProvidersProps extends PropsWithChildren {
  options?: IOptions
}

export const TestProvider: FC<ITestProvidersProps> = ({
  options = {},
  children,
}) => {
  const {
    routes = '/',
    initialState,
    asyncReducers,
    theme = ETheme.LIGHT,
  } = options

  return (
    <MemoryRouter initialEntries={[routes]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nForTest}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export const componentRender = (
  component: ReactNode,
  options: IOptions = {}
) => {
  return render(<TestProvider options={options}>{component}</TestProvider>)
}
