import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { AppRouter } from './AppRouter'
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteProfile,
} from '@/shared/const/router'
import { screen } from '@testing-library/react'
import { EUserRole } from '@/entities/User'

describe('app/router/AppRouter', () => {
  test('Страница должна отрендерится', async () => {
    componentRender(<AppRouter />, { routes: getRouteAbout() })

    const page = await screen.findByTestId('AboutPage')

    expect(page).toBeInTheDocument()
  })

  test('Страница не найдена', async () => {
    componentRender(<AppRouter />, { routes: '/qdwqwdqwfwq' })

    const page = await screen.findByTestId('NotFoundPage')

    expect(page).toBeInTheDocument()
  })

  test('Редирект неавторизованного пользователя', async () => {
    componentRender(<AppRouter />, { routes: getRouteProfile('1') })

    const page = await screen.findByTestId('MainPage')

    expect(page).toBeInTheDocument()
  })

  test('Доступ к закрытой странице авторизованного пользователя', async () => {
    componentRender(<AppRouter />, {
      routes: getRouteProfile('1'),
      initialState: { user: { _isInit: true, authData: {} } },
    })

    const page = await screen.findByTestId('ProfilePage')

    expect(page).toBeInTheDocument()
  })

  test('Доступ запрещён, отсутствует роль', async () => {
    componentRender(<AppRouter />, {
      routes: getRouteAdminPanel(),
      initialState: { user: { _isInit: true, authData: {} } },
    })

    const page = await screen.findByTestId('ForbiddenPage')

    expect(page).toBeInTheDocument()
  })

  test('Доступ разрешен, присутствует роль', async () => {
    componentRender(<AppRouter />, {
      routes: getRouteAdminPanel(),
      initialState: {
        user: {
          _isInit: true,
          authData: {
            roles: [EUserRole.ADMIN],
          },
        },
      },
    })

    const page = await screen.findByTestId('AdminPanelPage')

    expect(page).toBeInTheDocument()
  })
})
