import { lazy } from 'react'

export const MainPageAsync = lazy(
  async () =>
    // Имитация загрузки страницы убрать в продакшене
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./MainPage'))
      }, 2000)
    })
)

// export const MainPageAsync = lazy(() => import('./MainPage'))
