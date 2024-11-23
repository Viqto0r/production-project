import { lazy } from 'react'

export const ArticleEditPageAsync = lazy(
  async () =>
    // Имитация загрузки страницы убрать в продакшене
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./ArticleEditPage'))
      }, 2000)
    })
)

// export const ArticleEditPageAsync = lazy(() => import('./ArticleEditPageAsync'))
