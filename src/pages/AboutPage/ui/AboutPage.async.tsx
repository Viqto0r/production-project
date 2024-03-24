import { lazy } from 'react'

export const AboutPageAsync = lazy(
  () =>
    //Имитация загрузки страницы убрать в продакшене
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import('./AboutPage')), 2000)
    })
)

//export const AboutPageAsync = lazy(() => import('./AboutPage'))
