import { lazy } from 'react'

export const ArticleDetailsPageAsync = lazy(
  async () =>
    // Имитация загрузки страницы убрать в продакшене
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./ArticleDetailsPage'))
      }, 2000)
    })
)
