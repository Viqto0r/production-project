import { lazy } from 'react'

export const MainPageAsync = lazy(
  () =>
    //Имитация загрузки страницы убрать в продакшене
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import('./MainPage')), 2000)
    })
)

//export const MainPageAsync = lazy(() => import('./MainPage'))
