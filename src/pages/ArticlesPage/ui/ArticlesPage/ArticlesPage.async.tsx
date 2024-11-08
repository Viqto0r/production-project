import { lazy } from 'react'

export const ArticlesPageAsync = lazy(
  async () =>
    // Имитация загрузки страницы убрать в продакшене
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./ArticlesPage'))
      }, 2000)
    })
)
