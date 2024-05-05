import { lazy } from 'react'

export const ProfilePageAsync = lazy(
  async () =>
    // Имитация загрузки страницы убрать в продакшене
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./ProfilePage'))
      }, 2000)
    })
)

// export const ProfilePageAsync = lazy(() => import('./ProfilePage'))
