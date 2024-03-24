import { lazy } from 'react'

export const AboutPageAsync = lazy(
  async () =>
    // Имитация загрузки страницы убрать в продакшене
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./AboutPage'))
      }, 2000)
    })
)

// export const AboutPageAsync = lazy(() => import('./AboutPage'))
